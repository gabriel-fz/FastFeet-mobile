import styled from 'styled-components/native';

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

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
