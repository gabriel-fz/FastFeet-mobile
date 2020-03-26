import React from 'react';
import { View, TouchableOpacity } from 'react-native';
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
          <TextInfo>Ludwig van Beethoven</TextInfo>

          <TitleInfo>ENDEREÇO DE ENTREGA</TitleInfo>
          <TextInfo>Rua Beethoven, 1729, Diadema - SP, 09960-580</TextInfo>

          <TitleInfo>PRODUTO</TitleInfo>
          <TextInfo>Yamaha SX7</TextInfo>
        </CardInfo>

        <CardInfo>
          <CardHeader>
            <Icon name="local-shipping" size={30} color="#7d40e7" />
            <CardTitle>Situação da entrega</CardTitle>
          </CardHeader>

          <TitleInfo>STATUS</TitleInfo>
          <TextInfo>Pendente</TextInfo>

          <Row>
            <View>
              <TitleInfo>DATA DE RETIRADA</TitleInfo>
              <TextInfo>14 / 01 / 2020</TextInfo>
            </View>

            <View>
              <TitleInfo>DATA DE ENTREGA</TitleInfo>
              <TextInfo>- - / - - / - -</TextInfo>
            </View>
          </Row>
        </CardInfo>

        <RowButtons>
          <OptionButton onPress={() => navigation.navigate('InformProblem')}>
            <Icon name="highlight-off" size={30} color="#E74040" />
            <TextButton>Informar</TextButton>
            <TextButton>Problema</TextButton>
          </OptionButton>

          <Divider />

          <OptionButton onPress={() => navigation.navigate('ViewProblems')}>
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
