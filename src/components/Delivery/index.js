import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import StepIndicator from '~/components/StepIndicator';

import {
  Container,
  Header,
  Content,
  Footer,
  Name,
  Detail,
  TitleDetail,
  TextDetail,
  DetailLinkText,
} from './styles';

export default function Delivery({ data, navigation }) {
  return (
    <Container>
      <Header>
        <Icon name="local-shipping" size={30} color="#7d40e7" />
        <Name>{data.product}</Name>
      </Header>

      <Content>
        <StepIndicator retirada={data.start_date} entregre={data.end_date} />
      </Content>

      <Footer>
        <Detail>
          <TitleDetail>Data</TitleDetail>
          <TextDetail>14/01/2020</TextDetail>
        </Detail>

        <Detail>
          <TitleDetail>Cidade</TitleDetail>
          <TextDetail>{data.recipient.city}</TextDetail>
        </Detail>

        <TouchableOpacity
          onPress={() => navigation.navigate('DeliveryDetails', { data })}
        >
          <DetailLinkText>Ver detalhes</DetailLinkText>
        </TouchableOpacity>
      </Footer>
    </Container>
  );
}
