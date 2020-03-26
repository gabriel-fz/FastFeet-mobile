import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BackgroundDetails from '~/components/BackgroundDetails';

import {
  Container,
  DeliveryName,
  List,
  CardProblem,
  TextProblem,
  DateProblem,
} from './styles';

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function ViewProblems({ navigation }) {
  return (
    <>
      <BackgroundDetails />

      <Container>
        <DeliveryName>Encomenda 01</DeliveryName>

        <List
          data={data}
          keyExtractor={(item) => String(item)}
          renderItem={({ item }) => (
            <CardProblem>
              <TextProblem>
                Destinatário ausente com um problema muiro grande, grande ate de
                mais
              </TextProblem>
              <DateProblem>14/01/2020</DateProblem>
            </CardProblem>
          )}
        />
      </Container>
    </>
  );
}

ViewProblems.navigationOptions = ({ navigation }) => ({
  title: 'Ver Problemas',
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
