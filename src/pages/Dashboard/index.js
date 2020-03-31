import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { StatusBar, ActivityIndicator } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import api from '~/services/api';

import Header from '~/components/Header';
import ListDeliveries from '~/components/ListDeliveries';

import {
  Container,
  HeaderList,
  Title,
  Options,
  OptionsButton,
  OptionsButtonText,
  LoadingIndicator,
} from './styles';

function Dashboard({ navigation, isFocused }) {
  const { deliveryman } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(false);
  const [complet, setComplet] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [deliveriesNotCompleteds, setDeliveriesNotCompleteds] = useState([]);
  const [deliveriesCompleteds, setDeliveriesCompleteds] = useState([]);

  /**
   * A função seguinte faz duas chamadas para preencher as listas com entregas
   * concluídas e não concluídas, tudo isso devido ao back-end ter essas duas rotas
   * para caso necessite fazer uma chamada de apenas uma lista específica
   */

  async function loadDeliveries() {
    const responseCompleted = await api.get(
      `deliveryman/${deliveryman.id}/deliveries`,
      {
        params: { completed: true },
      }
    );
    setDeliveriesCompleteds(responseCompleted.data);

    const responseNotCompleted = await api.get(
      `deliveryman/${deliveryman.id}/deliveries`,
      {
        params: { completed: false },
      }
    );
    setDeliveriesNotCompleteds(responseNotCompleted.data);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);

    if (isFocused) {
      loadDeliveries();
    }
  }, [isFocused]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    loadDeliveries();
    setRefreshing(false);
  }, [refreshing]);

  return (
    <Container>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Header deliveryman={deliveryman} />

      <HeaderList>
        <Title>Entregas</Title>

        <Options>
          <OptionsButton onPress={() => setComplet(false)}>
            <OptionsButtonText active={!complet}>Pendentes</OptionsButtonText>
          </OptionsButton>

          <OptionsButton onPress={() => setComplet(true)}>
            <OptionsButtonText active={complet}>Entregues</OptionsButtonText>
          </OptionsButton>
        </Options>
      </HeaderList>

      {loading ? (
        <LoadingIndicator />
      ) : (
        <ListDeliveries
          data={complet ? deliveriesCompleteds : deliveriesNotCompleteds}
          navigation={navigation}
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      )}
    </Container>
  );
}

Dashboard.navigationOptions = {
  headerShown: false,
};

export default withNavigationFocus(Dashboard);
