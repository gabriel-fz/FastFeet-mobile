import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

// import { Container } from './styles';

export default function Dashboard() {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    </View>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Entregas',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="reorder" size={20} color={tintColor} />
  ),
};
