import React, { useState, useCallback, useEffect } from 'react';
import {
  View,
  Alert,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BackgroundDetails from '~/components/BackgroundDetails';

import { Container } from './styles';

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export default function DeliveryConfirm({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);
  const [teste, setTeste] = useState('Gabriel');
  const [loadPage, setLoadPage] = useState(true);

  useEffect(() => {
    async function loadDeliveries() {
      setTeste('Gabriel Fiorese Zancanela');
      console.tron.log(loadPage);
    }
    loadDeliveries();
  }, [loadPage]);

  function handleOk() {
    console.tron.log('handle ok acionado');
  }

  function handleCancel() {
    console.tron.log('handle cancel acionado');
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    console.tron.log('func');
    Alert.alert(
      'Erro',
      'Não foi possível enviar o problema',
      [
        {
          text: 'Cancel',
          onPress: () => handleCancel(),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => handleOk() },
      ],
      { cancelable: false }
    );
    setRefreshing(false);
  }, [refreshing]);

  return (
    <>
      <BackgroundDetails />
      <Container>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <Text>Pull down to see RefreshControl indicator</Text>
          <Text>Nome:</Text>
          <Text>{teste}</Text>
        </ScrollView>
      </Container>
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
