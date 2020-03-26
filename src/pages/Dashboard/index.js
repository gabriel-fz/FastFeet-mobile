import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StatusBar, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import Header from '~/components/Header';
import Delivery from '~/components/Delivery';

import {
  Container,
  HeaderList,
  Title,
  Options,
  OptionsButton,
  OptionsButtonText,
  List,
  NotFound,
  TextNotFound,
} from './styles';

export default function Dashboard({ navigation }) {
  const { deliveryman } = useSelector((state) => state.auth);

  const [deliveriesCompleteds, setDeliveriesCompleteds] = useState(false);
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get(
        `deliveyman/${deliveryman.id}/deliveries`,
        {
          params: { completed: deliveriesCompleteds },
        }
      );

      setDeliveries(response.data);
    }

    loadDeliveries();
  }, [deliveriesCompleteds]);

  console.tron.log(deliveries.length);

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Header deliveryman={deliveryman} />

      <HeaderList>
        <Title>Entregas</Title>

        <Options>
          <OptionsButton onPress={() => setDeliveriesCompleteds(false)}>
            <OptionsButtonText active={!deliveriesCompleteds}>
              Pendentes
            </OptionsButtonText>
          </OptionsButton>

          <OptionsButton onPress={() => setDeliveriesCompleteds(true)}>
            <OptionsButtonText active={deliveriesCompleteds}>
              Entregues
            </OptionsButtonText>
          </OptionsButton>
        </Options>
      </HeaderList>

      {deliveries.length > 0 ? (
        <List
          data={deliveries}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Delivery data={item} navigation={navigation} />
          )}
        />
      ) : (
        <NotFound>
          <TextNotFound>Nenhuma entrega encontrada</TextNotFound>
        </NotFound>
      )}
    </Container>
  );
}

Dashboard.navigationOptions = {
  headerShown: false,
};
