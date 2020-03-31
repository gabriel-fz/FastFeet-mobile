import React, { useState, useEffect, useCallback } from 'react';
import { TouchableOpacity, RefreshControl, ScrollView } from 'react-native';
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
  const [refreshing, setRefreshing] = useState(false);

  async function loadProblems() {
    const response = await api.get(`delivery/${delivery.id}/problems`);

    setProblems(response.data);
  }

  useEffect(() => {
    loadProblems();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadProblems();
    setRefreshing(false);
  }, [refreshing]);

  return (
    <BackgroundDetails>
      <Container>
        <DeliveryName>{delivery.product}</DeliveryName>

        {problems.length > 0 ? (
          <List
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            data={problems}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <CardProblem>
                <TextProblem>{item.description}</TextProblem>
                <DateProblem date={item.createdAt} />
              </CardProblem>
            )}
          />
        ) : (
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <NotFound>
              <TextNotFound>Nenhuma problema encontrado</TextNotFound>
            </NotFound>
          </ScrollView>
        )}
      </Container>
    </BackgroundDetails>
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
