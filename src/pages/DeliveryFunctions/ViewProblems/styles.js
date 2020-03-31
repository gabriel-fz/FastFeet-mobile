import styled from 'styled-components/native';

import Card from '~/components/Card';
import DateFormat from '~/components/DateFormat';

export const Container = styled.View`
  flex: 1;
  padding: 80px 20px 0;
`;

export const DeliveryName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-bottom: 12px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const CardProblem = styled(Card)`
  flex-direction: row;
  justify-content: space-between;
  padding: 17px;
  margin-bottom: 15px;
`;

export const TextProblem = styled.Text`
  flex: 1;
  font-size: 16px;
  color: #999999;
`;

export const DateProblem = styled(DateFormat)`
  font-size: 12px;
  color: #c1c1c1;
`;

export const NotFound = styled.View`
  margin-top: 100px;
  align-items: center;
  justify-content: center;
`;

export const TextNotFound = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #999999;
`;
