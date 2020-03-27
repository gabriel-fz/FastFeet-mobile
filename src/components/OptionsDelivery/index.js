import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Divider, OptionButton, TextButton } from './styles';

export default function OptionsDelivery({ navigation, delivery }) {
  return (
    <Container>
      <OptionButton
        enabled={!delivery.end_date}
        onPress={() => navigation.navigate('InformProblem', { delivery })}
      >
        <Icon
          name="highlight-off"
          size={30}
          color={delivery.end_date ? '#999999' : '#E74040'}
        />
        <TextButton>Informar</TextButton>
        <TextButton>Problema</TextButton>
      </OptionButton>

      <Divider />

      <OptionButton
        onPress={() => navigation.navigate('ViewProblems', { delivery })}
      >
        <Icon name="info-outline" size={30} color="#E7BA40" />
        <TextButton>Visualizar</TextButton>
        <TextButton>Problemas</TextButton>
      </OptionButton>

      <Divider />

      <OptionButton
        enabled={!delivery.end_date}
        onPress={() =>
          navigation.navigate(
            delivery.start_date ? 'DeliveryConfirm' : 'WithdrawDelivery',
            {
              delivery,
            }
          )
        }
      >
        <Icon
          name={delivery.start_date ? 'check' : 'add-circle-outline'}
          size={30}
          color={delivery.end_date ? '#999999' : '#7D40E7'}
        />
        <TextButton>{delivery.start_date ? 'Confirmar' : 'Retirar'}</TextButton>
        <TextButton>Entrega</TextButton>
      </OptionButton>
    </Container>
  );
}
