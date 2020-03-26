import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 35px;
  background: #fff;
`;

export const HeaderList = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  padding-bottom: 15px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #444444;
`;

export const Options = styled.View`
  flex-direction: row;
`;

export const OptionsButton = styled.TouchableOpacity`
  margin-left: 15px;
`;

export const OptionsButtonText = styled.Text`
  color: ${(props) => (props.active ? '#7D40E7' : '#999999')};
  font-weight: bold;
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const NotFound = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const TextNotFound = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #999999;
`;
