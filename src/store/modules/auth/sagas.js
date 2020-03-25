import { Alert } from 'react-native';
import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const deliverymanId = payload.id;

    const response = yield call(api.get, `deliverymans/${deliverymanId}`);

    const deliveryman = response.data;

    yield put(signInSuccess(deliveryman));
  } catch (err) {
    Alert.alert('Erro no login', 'ID de cadastro não encontrado');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  payload;
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
]);
