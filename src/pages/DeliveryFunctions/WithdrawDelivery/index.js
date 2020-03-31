import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import BackgroundDetails from '~/components/BackgroundDetails';

import {
  Container,
  CardInfo,
  TitleCard,
  TitleInfo,
  ConfirmButton,
  CancelButton,
} from './styles';

export default function WithdrawDelivery({ navigation }) {
  const { deliveryman } = useSelector((state) => state.auth);
  const delivery = navigation.getParam('delivery');

  const [contWithdraw, setContWithdraw] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCont() {
      const response = await api.get(`deliveryman/${deliveryman.id}/withdraw`);

      const { withdrawn_today } = response.data;

      setContWithdraw(5 - withdrawn_today);
    }

    loadCont();
  }, []);

  async function handleWithdrawDelivery() {
    try {
      setLoading(true);
      const start_date = new Date();

      await api.put(`deliveryman/${deliveryman.id}/deliveries/${delivery.id}`, {
        start_date,
      });

      setLoading(false);
      Alert.alert('Sucesso!', 'Retirada de entrega confirmada!');

      navigation.navigate('Dashboard');
    } catch (err) {
      setLoading(false);
      Alert.alert('Erro', 'Não foi possível retirar a entrega');
    }
  }

  return (
    <BackgroundDetails>
      <Container>
        <CardInfo>
          <TitleCard>Deseja mesmo retirar este produto?</TitleCard>

          <TitleInfo>{`Você pode fazer mais ${contWithdraw} retiradas hoje`}</TitleInfo>
        </CardInfo>

        <ConfirmButton loading={loading} onPress={handleWithdrawDelivery}>
          Confirmar
        </ConfirmButton>
        <CancelButton
          onPress={() => {
            navigation.navigate('DeliveryDetails');
          }}
        >
          Cancelar
        </CancelButton>
      </Container>
    </BackgroundDetails>
  );
}

WithdrawDelivery.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar retirada',
  titleSize: '8px',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DeliveryDetails');
      }}
    >
      <Icon name="chevron-left" size={25} color="#FFF" />
    </TouchableOpacity>
  ),
});
