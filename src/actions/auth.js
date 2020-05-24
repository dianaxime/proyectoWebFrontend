import * as types from '../types/auth';

export const startRegister = (username, password, password2, email, tipo) => ({
  type: types.REGISTER_STARTED,
  payload: { username, password, password2, email, tipo },
});

export const completeRegister = token => ({
  type: types.REGISTER_COMPLETED,
  payload: { token },
});

export const failRegister = error => ({
  type: types.REGISTER_FAILED,
  payload: { error },
});

export const startLogin = (username, password) => ({
  type: types.AUTHENTICATION_STARTED,
  payload: { username, password },
});

export const completeLogin = token => ({
  type: types.AUTHENTICATION_COMPLETED,
  payload: { token },
});

export const failLogin = error => ({
  type: types.AUTHENTICATION_FAILED,
  payload: { error },
});

export const logout = () => ({
  type: types.AUTHENTICATION_IDENTITY_CLEARED,
});

export const startTokenRefresh = () => ({
  type: types.TOKEN_REFRESH_STARTED,
});

export const completeTokenRefresh = newToken => ({
  type: types.TOKEN_REFRESH_COMPLETED,
  payload: { newToken },
});

export const failTokenRefresh = error => ({
  type: types.TOKEN_REFRESH_FAILED,
  payload: { error },
});