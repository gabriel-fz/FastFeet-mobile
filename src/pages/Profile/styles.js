import styled from 'styled-components/native';

import Button from '~/components/Button';
import DateFormat from '~/components/DateFormat';

export const Container = styled.View`
  flex: 1;
  padding: 0 35px;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 135px;
  height: 135px;
  margin-top: 80px;
  margin-bottom: 30px;
  border-radius: 100px;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: #666666;
  margin-top: 15px;
  align-self: stretch;
  text-align: left;
`;

export const DeliveryInfo = styled.Text`
  font-size: 20px;
  color: #666666;
  font-weight: bold;
  align-self: stretch;
  text-align: left;
`;

export const DeliveryDate = styled(DateFormat)`
  font-size: 20px;
  color: #666666;
  font-weight: bold;
  align-self: stretch;
  text-align: left;
`;

export const LogoutButton = styled(Button)`
  align-self: stretch;
  background: #e74040;
  margin-top: 30px;
`;
