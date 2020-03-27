import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
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
