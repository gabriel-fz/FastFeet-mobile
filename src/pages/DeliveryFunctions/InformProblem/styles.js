import styled from 'styled-components/native';

import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 80px 20px 0;
`;

export const Form = styled.View`
  align-self: stretch;
  justify-content: flex-start;
`;

export const FormInput = styled(Input)`
  margin-bottom: 15px;
  justify-content: flex-start;
  border: 1px solid #eee;
  height: 300px;
`;

export const SubmitButton = styled(Button)`
  align-self: stretch;
  background: #7d40e7;
`;
