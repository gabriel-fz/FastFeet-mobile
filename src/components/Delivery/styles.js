import styled from 'styled-components/native';

import Card from '~/components/Card';
import DateFormat from '~/components/DateFormat';

export const Container = styled(Card)`
  align-self: stretch;
  margin-bottom: 28px;
`;

export const Header = styled.View`
  align-self: stretch;
  flex-direction: row;
  align-items: center;
  padding: 13px;
`;

export const Content = styled.View`
  align-self: stretch;
  padding: 13px 13px 20px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-self: stretch;
  background: #f8f9fd;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #7d40e7;
  margin-left: 10px;
`;

export const Detail = styled.View`
  flex: 1;
  align-items: flex-start;
`;

export const TitleDetail = styled.Text`
  font-size: 8px;
  font-weight: bold;
  color: #999999;
`;

export const TextDetail = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 12px;
  font-weight: bold;
  color: #444444;
`;

export const DataDetail = styled(DateFormat)`
  font-size: 12px;
  font-weight: bold;
  color: #444444;
`;

export const DetailLinkText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #7d40e7;
  margin-left: 5px;
`;
