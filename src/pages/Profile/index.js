import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Avatar, Title, DeliveryData, LogoutButton } from './styles';

export default function Profile() {
  const dispatch = useDispatch();

  const { deliveryman, loading } = useSelector((state) => state.auth);

  console.tron.log(loading);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Container>
        <Avatar
          source={{
            uri: deliveryman.avatar
              ? `http://192.168.0.107:3333/files/${deliveryman.avatar.path}`
              : `https://api.adorable.io/avatar/50/rocketseat.png`,
          }}
        />

        <Title>Nome completo</Title>
        <DeliveryData>{deliveryman.name}</DeliveryData>

        <Title>Email</Title>
        <DeliveryData>{deliveryman.email}</DeliveryData>

        <Title>Data de cadastro</Title>
        <DeliveryData>10/01/2020</DeliveryData>

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
