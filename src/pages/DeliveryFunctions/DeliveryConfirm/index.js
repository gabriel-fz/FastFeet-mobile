import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BackgroundDetails from '~/components/BackgroundDetails';

// import { Container } from './styles';

export default function DeliveryConfirm({ navigation }) {
  return (
    <>
      <BackgroundDetails />
      <View>
        <Text>Confirmar entrega</Text>
      </View>
    </>
  );
}

DeliveryConfirm.navigationOptions = ({ navigation }) => ({
  title: 'Confirmar entrega',
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
