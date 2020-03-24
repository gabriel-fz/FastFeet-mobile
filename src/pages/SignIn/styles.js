import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  background: #7d40e7;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 35px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 15px;
`;

export const SubmitButton = styled(Button)`
  align-self: stretch;
  background: #82bf18;
`;
