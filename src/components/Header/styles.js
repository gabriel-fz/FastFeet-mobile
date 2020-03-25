import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
  margin: 30px 0;
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 100px;
`;

export const Info = styled.View`
  margin-left: 12px;
`;

export const Welcome = styled.Text`
  font-size: 12px;
  color: #666666;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 22px;
  color: #444444;
`;
