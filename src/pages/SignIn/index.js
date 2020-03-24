import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/fastfeet-logo.png';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  return (
    <Container>
      <Image source={logo} />

      <Form>
        <FormInput
          autoCapitalize="none"
          placeholder="Informe seu ID de cadastro"
        />
      </Form>

      <SubmitButton onPress={() => {}}>Entrar no sistema</SubmitButton>
    </Container>
  );
}
