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

export default function Delivery() {
  return (
    <Container>
      <Header>
        <Icon name="local-shipping" size={30} color="#7d40e7" />
        <Name>Encomenda 1</Name>
      </Header>

      <Content>
        <StepIndicator />
      </Content>

      <Footer>
        <Detail>
          <TitleDetail>Data</TitleDetail>
          <TextDetail>14/01/2020</TextDetail>
        </Detail>

        <Detail>
          <TitleDetail>Cidade</TitleDetail>
          <TextDetail>Diadema</TextDetail>
        </Detail>

        <TouchableOpacity onPress={() => {}}>
          <DetailLinkText>Ver detalhes</DetailLinkText>
        </TouchableOpacity>
      </Footer>
    </Container>
  );
}
