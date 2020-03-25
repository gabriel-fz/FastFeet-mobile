import React from 'react';

import {
  Container,
  LineContainer,
  Line,
  Check,
  CheckContent,
  CheckPointer,
  StepsText,
} from './styles';

export default function StepIndicator() {
  return (
    <Container>
      <LineContainer>
        <Line />
      </LineContainer>

      <Check>
        <CheckContent>
          <CheckPointer active={true} />
          <StepsText>Aguardando</StepsText>
          <StepsText>Retirada</StepsText>
        </CheckContent>
        <CheckContent>
          <CheckPointer active={true} />
          <StepsText>Retirada</StepsText>
        </CheckContent>
        <CheckContent>
          <CheckPointer active={false} />
          <StepsText>Entregue</StepsText>
        </CheckContent>
      </Check>
    </Container>
  );
}
