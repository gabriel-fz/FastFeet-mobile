import styled from 'styled-components/native';
import { RNCamera } from 'react-native-camera';

import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  padding: 80px 20px 0;
`;

export const CameraView = styled.View`
  height: 445px;
  margin-top: 20px;
  margin-bottom: 40px;
  justify-content: flex-end;
`;

export const Thumbnail = styled.Image`
  flex: 1;
  border-radius: 4px;
  height: 445px;
`;

export const CameraButton = styled.TouchableOpacity`
  background: rgba(0, 0, 0, 0.3);
  height: 61px;
  width: 61px;
  align-self: center;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 20px;
`;

export const Camera = styled(RNCamera)`
  flex: 1;
  border-radius: 4px;
  height: 445px;
`;

export const SubmitButton = styled(Button)`
  align-self: stretch;
  background: ${(props) => (props.enabled ? '#7d40e7' : '#999999')};
`;
