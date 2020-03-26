import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

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

export const RowButtons = styled.View`
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid #0000001a;
  border-radius: 4px;
`;

export const Divider = styled.View`
  width: 1px;
  background: #0000001a;
`;

export const OptionButton = styled(RectButton)`
  background: #f8f9fd;
  flex: 1;
  padding: 15px 0;
  align-items: center;
`;

export const TextButton = styled.Text`
  font-size: 12px;
  color: #999999;
`;
