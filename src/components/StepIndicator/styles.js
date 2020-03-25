import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
`;

export const LineContainer = styled.View`
  position: absolute;
  height: 9px;
  width: 100%;
  padding: 4px 30px;
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background: #7d40e7;
`;

export const Check = styled.View`
  flex-direction: row;
  align-self: stretch;
  justify-content: space-between;
`;

export const CheckContent = styled.View`
  align-items: center;
  width: 60px;
`;

export const CheckPointer = styled.View`
  height: 9px;
  width: 9px;
  background: ${(props) => (props.active ? '#7d40e7' : '#fff')};
  border: solid 1px #7d40e7;
  border-radius: 100px;
`;

export const StepsText = styled.Text`
  font-size: 8px;
  color: #999999;
`;
