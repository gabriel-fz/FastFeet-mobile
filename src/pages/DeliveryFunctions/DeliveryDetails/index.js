import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { parseISO, format } from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BackgroundDetails from '~/components/BackgroundDetails';

import {
  Container,
  CardInfo,
  CardHeader,
  Row,
  CardTitle,
  TitleInfo,
  TextInfo,
  RowButtons,
  Divider,
  OptionButton,
  TextButton,
} from './styles';

export default function DeliveryDetails({ navigation }) {
  const delivery = navigation.getParam('data');
  const { recipient } = delivery;

  function formatDate(date) {
    return date ? format(parseISO(date), 'dd/MM/YYY') : '- - / - - / - -';
  }

  return (
    <>
      <BackgroundDetails />
      <Container>
        <CardInfo>
          <CardHeader>
            <Icon name="local-shipping" size={30} color="#7d40e7" />
            <CardTitle>Informações da entrega</CardTitle>
          </CardHeader>

          <TitleInfo>DESTINATÁRIO</TitleInfo>
          <TextInfo>{delivery.recipient.name}</TextInfo>

          <TitleInfo>ENDEREÇO DE ENTREGA</TitleInfo>
          <TextInfo>{`${recipient.address}, ${recipient.address_number}, ${recipient.city} - ${recipient.state}, ${recipient.zip_code}`}</TextInfo>

          <TitleInfo>PRODUTO</TitleInfo>
          <TextInfo>{delivery.product}</TextInfo>
        </CardInfo>

        <CardInfo>
          <CardHeader>
            <Icon name="local-shipping" size={30} color="#7d40e7" />
            <CardTitle>Situação da entrega</CardTitle>
          </CardHeader>

          <TitleInfo>STATUS</TitleInfo>
          <TextInfo>{delivery.end_date ? 'Entrege' : 'Pendente'}</TextInfo>

          <Row>
            <View>
              <TitleInfo>DATA DE RETIRADA</TitleInfo>
              <TextInfo>{formatDate(delivery.start_date)}</TextInfo>
            </View>

            <View>
              <TitleInfo>DATA DE ENTREGA</TitleInfo>
              <TextInfo>{formatDate(delivery.end_date)}</TextInfo>
            </View>
          </Row>
        </CardInfo>

        <RowButtons>
          <OptionButton
            onPress={() => navigation.navigate('InformProblem', { delivery })}
          >
            <Icon name="highlight-off" size={30} color="#E74040" />
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

          <OptionButton onPress={() => navigation.navigate('DeliveryConfirm')}>
            <Icon name="check" size={30} color="#7D40E7" />
            <TextButton>Confirmar</TextButton>
            <TextButton>Entrega</TextButton>
          </OptionButton>
        </RowButtons>
      </Container>
    </>
  );
}

DeliveryDetails.navigationOptions = ({ navigation }) => ({
  title: 'Detalhes da encomenda',
  titleSize: '8px',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Dashboard');
      }}
    >
      <Icon name="chevron-left" size={25} color="#FFF" />
    </TouchableOpacity>
  ),
});
