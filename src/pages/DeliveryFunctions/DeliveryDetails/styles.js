import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 80px 20px 0;
`;

export const CardInfo = styled.View`
  background: #fff;
  padding: 15px 12px;
  border-radius: 4px;
  border: 1px solid #eee;
  margin-bottom: 10px;
`;

export const CardHeader = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardTitle = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #7d40e7;
  margin-left: 5px;
`;

export const TitleInfo = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #999999;
  margin: 5px 0;
`;

export const TextInfo = styled.Text`
  font-size: 14px;
  color: #666666;
  margin-bottom: 15px;
`;
