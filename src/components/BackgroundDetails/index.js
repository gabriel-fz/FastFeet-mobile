import React from 'react';
import { StatusBar } from 'react-native';

import { Container, Background } from './styles';

export default function BackgroundDetails() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
      <Container>
        <Background />
      </Container>
    </>
  );
}
