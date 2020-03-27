import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import BackgroundDetails from '~/components/BackgroundDetails';

import {
  Container,
  DeliveryName,
  List,
  CardProblem,
  TextProblem,
  DateProblem,
  NotFound,
  TextNotFound,
} from './styles';

export default function ViewProblems({ navigation }) {
  const delivery = navigation.getParam('delivery');

  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get(`delivery/${delivery.id}/problems`);

      setProblems(response.data);
    }

    loadProblems();

    console.tron.log(problems);
  }, []);

  console.tron.log('chegou:');
  console.tron.log(delivery);

  return (
    <>
      <BackgroundDetails />

      <Container>
        <DeliveryName>{delivery.product}</DeliveryName>

        {problems.length > 0 ? (
          <List
            data={problems}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <CardProblem>
                <TextProblem>{item.description}</TextProblem>
                <DateProblem>14/01/2020</DateProblem>
              </CardProblem>
            )}
          />
        ) : (
          <NotFound>
            <TextNotFound>Nenhuma problema encontrado</TextNotFound>
          </NotFound>
        )}
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
