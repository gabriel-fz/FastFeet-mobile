import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BackgroundDetails from '~/components/BackgroundDetails';
import OptionsDelivery from '~/components/OptionsDelivery';

import {
  Container,
  CardInfo,
  CardHeader,
  Row,
  CardTitle,
  TitleInfo,
  TextInfo,
  DateInfo,
} from './styles';

export default function DeliveryDetails({ navigation }) {
  const delivery = navigation.getParam('data');
  const { recipient } = delivery;

  return (
    <BackgroundDetails>
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
              <DateInfo date={delivery.start_date} />
            </View>

            <View>
              <TitleInfo>DATA DE ENTREGA</TitleInfo>
              <DateInfo date={delivery.end_date} />
            </View>
          </Row>
        </CardInfo>

        <OptionsDelivery navigation={navigation} delivery={delivery} />
      </Container>
    </BackgroundDetails>
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
