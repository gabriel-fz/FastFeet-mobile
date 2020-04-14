import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import userAvatar from '~/assets/avatar-user.png';
import linkLocal from '~/services/linkLocal.js';
import { signOut } from '~/store/modules/auth/actions';

import {
  Container,
  Avatar,
  Title,
  DeliveryInfo,
  DeliveryDate,
  LogoutButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();
  const { deliveryman } = useSelector((state) => state.auth);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Container>
        <Avatar
          source={
            deliveryman.avatar
              ? {
                  uri: `${linkLocal}/files/${deliveryman.avatar.path}`,
                }
              : userAvatar
          }
        />

        <Title>Nome completo</Title>
        <DeliveryInfo>{deliveryman.name}</DeliveryInfo>

        <Title>Email</Title>
        <DeliveryInfo>{deliveryman.email}</DeliveryInfo>

        <Title>Data de cadastro</Title>
        <DeliveryDate date={deliveryman.created_at} />

        <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
      </Container>
    </>
  );
}

Profile.navigationOptions = {
  tabBarLabel: 'Meu Perfil',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="account-circle" size={20} color={tintColor} />
  ),
};
