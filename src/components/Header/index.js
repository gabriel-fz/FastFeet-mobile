import React from 'react';
import { useDispatch } from 'react-redux';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import userAvatar from '~/assets/avatar-user.png';
import { signOut } from '~/store/modules/auth/actions';

import { Container, Left, Avatar, Info, Welcome, Name } from './styles';

export default function Header({ deliveryman }) {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Left>
        <Avatar
          source={
            deliveryman.avatar
              ? {
                  uri: `http://192.168.0.107:3333/files/${deliveryman.avatar.path}`,
                }
              : userAvatar
          }
        />

        <Info>
          <Welcome>Bem vindo de volta,</Welcome>
          <Name>{deliveryman.name}</Name>
        </Info>
      </Left>

      <TouchableOpacity onPress={handleLogout}>
        <Icon name="exit-to-app" size={25} color="#E74040" />
      </TouchableOpacity>
    </Container>
  );
}
