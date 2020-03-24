import React from 'react';
import { Text } from 'react-native';

import Input from '~/components/Input';

import { Background, SubmitButton } from './styles';

export default function SignIn() {
  return (
    <Background>
      <Text>SignIn</Text>
      <Input placeholder="Informe seu ID de cadastro" />

      <SubmitButton>Entrar no sistema</SubmitButton>
    </Background>
  );
}
