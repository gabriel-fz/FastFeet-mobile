import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
} from './styles';

export default function Dashboard() {
  const { deliveryman } = useSelector((state) => state.auth);

  const [deliveryCompleted, setDeliveryCompleted] = useState(false);

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Header deliveryman={deliveryman} />

      <HeaderList>
        <Title>Entregas</Title>

        <Options>
          <OptionsButton onPress={() => setDeliveryCompleted(false)}>
            <OptionsButtonText active={!deliveryCompleted}>
              Pendentes
            </OptionsButtonText>
          </OptionsButton>

          <OptionsButton onPress={() => setDeliveryCompleted(true)}>
            <OptionsButtonText active={deliveryCompleted}>
              Entregues
            </OptionsButtonText>
          </OptionsButton>
        </Options>
      </HeaderList>

      <Delivery />
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Entregas',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="reorder" size={20} color={tintColor} />
  ),
};
