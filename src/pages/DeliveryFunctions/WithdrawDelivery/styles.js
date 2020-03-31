import styled from 'styled-components/native';

import Card from '~/components/Card';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 80px 20px 0;
`;

export const CardInfo = styled(Card)`
  padding: 15px 12px;
  margin-bottom: 10px;
`;

export const TitleCard = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #7d40e7;
`;

export const TitleInfo = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  font-weight: bold;
  text-align: center;
  color: #999999;
`;

export const ConfirmButton = styled(Button)`
  margin-top: 30px;
  background: #7d40e7;
`;

export const CancelButton = styled(Button)`
  background: #999999;
  margin-top: 20px;
`;
