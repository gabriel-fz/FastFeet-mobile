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
  flex-wrap: wrap-reverse;
  padding: 17px;
  margin-bottom: 15px;
`;

export const TextProblem = styled.Text`
  font-size: 16px;
  color: #999999;
`;

export const Right = styled.View`
  flex: 1;
  align-items: flex-end;
  border: 1px solid #fff;
  flex-shrink: 0;
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
