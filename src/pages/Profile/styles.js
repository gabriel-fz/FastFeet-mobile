import styled from 'styled-components/native';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 0 35px;
`;

export const Avatar = styled.Image`
  border-radius: 25px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #666666;
  margin-top: 15px;
`;

export const DeliveryData = styled.Text`
  font-size: 20px;
  color: #666666;
  font-weight: bold;
`;

export const LogoutButton = styled(Button)`
  align-self: stretch;
  background: #e74040;
  margin-top: 30px;
`;
