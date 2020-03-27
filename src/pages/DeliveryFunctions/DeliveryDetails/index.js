import React from 'react';
import { View, Alert, TouchableOpacity } from 'react-native';
import { parseISO, format } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import BackgroundDetails from '~/components/BackgroundDetails';
import OptionsDelivery from '~/components/OptionsDelivery';

import {
  Container,
  CardInfo,
  CardHeader,
  Row,
  CardTitle,
  TitleInfo,
  TextInfo,
} from './styles';

export default function DeliveryDetails({ navigation }) {
  const delivery = navigation.getParam('data');
  const { recipient } = delivery;

  function formatDate(date) {
    return date ? format(parseISO(date), 'dd/MM/YYY') : '- - / - - / - -';
  }

  async function WithdrawDelivery() {
    try {
      const date = new Date();
      const start_date = date.getTime();

      console.tron.log(date.getTime());

      await api.put(`deliveryman/9/deliveries/14`, start_date);
      Alert.alert('Sucesso!', 'Retirada de entrega confirmada!');
      navigation.navigate('Dashboard');
    } catch (err) {
      Alert.alert('Erro', 'Não foi possível retirar a entrega');
    }
  }

  function handleConfirmWithdraw() {
    Alert.alert(
      'Retirada de entrega',
      'Deseja retirar a entrega?',
      [
        {
          text: 'Cancelar',
          onPress: () => {},
        },
        { text: 'Confirmar', onPress: () => WithdrawDelivery() },
      ],
      { cancelable: false }
    );
  }

  return (
    <>
      <BackgroundDetails />
      <Container>
        <CardInfo>
          <CardHeader>
            <Icon name="local-shipping" size={30} color="#7d40e7" />
            <CardTitle>Informações da entrega</CardTitle>
          </CardHeader>

          <TitleInfo>DESTINATÁRIO</TitleInfo>
          <TextInfo>{delivery.recipient.name}</TextInfo>

          <TitleInfo>ENDEREÇO DE ENTREGA</TitleInfo>
          <TextInfo>{`${recipient.address}, ${recipient.address_number}, ${recipient.city} - ${recipient.state}, ${recipient.zip_code}`}</TextInfo>

          <TitleInfo>PRODUTO</TitleInfo>
          <TextInfo>{delivery.product}</TextInfo>
        </CardInfo>

        <CardInfo>
          <CardHeader>
            <Icon name="local-shipping" size={30} color="#7d40e7" />
            <CardTitle>Situação da entrega</CardTitle>
          </CardHeader>

          <TitleInfo>STATUS</TitleInfo>
          <TextInfo>{delivery.end_date ? 'Entrege' : 'Pendente'}</TextInfo>

          <Row>
            <View>
              <TitleInfo>DATA DE RETIRADA</TitleInfo>
              <TextInfo>{formatDate(delivery.start_date)}</TextInfo>
            </View>

            <View>
              <TitleInfo>DATA DE ENTREGA</TitleInfo>
              <TextInfo>{formatDate(delivery.end_date)}</TextInfo>
            </View>
          </Row>
        </CardInfo>

        <OptionsDelivery navigation={navigation} delivery={delivery} />
      </Container>
    </>
  );
}

DeliveryDetails.navigationOptions = ({ navigation }) => ({
  title: 'Detalhes da encomenda',
  titleSize: '8px',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}
    >
      <Icon name="chevron-left" size={25} color="#FFF" />
    </TouchableOpacity>
  ),
});
