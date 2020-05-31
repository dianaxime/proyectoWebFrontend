import { fork, all } from 'redux-saga/effects';

import {
  watchLoginStarted,
  watchRefreshTokenStarted,
  watchRegisterStarted,
} from './auth';

import {
  watchClienteFetch,
  watchAddCliente,
  watchUpdateCliente,
} from './clientes';

import {
  watchEmpleadoFetch,
  watchAddEmpleado,
  watchUpdateEmpleado,
} from './empleados';

import {
  watchProductosFetch,
  watchAddProducto,
} from './productos';

import {
  watchFetchCompras,
  watchAddCompra,
  watchEndCompras,
  watchExpireCompra,
} from './compras';

import { watchFetchUsuarioStarted } from './usuarios';

function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchRefreshTokenStarted),
    fork(watchRegisterStarted),
    fork(watchFetchUsuarioStarted),
    fork(watchClienteFetch),
    fork(watchAddCliente),
    fork(watchUpdateCliente),
    fork(watchEmpleadoFetch),
    fork(watchAddEmpleado),
    fork(watchUpdateEmpleado),
    fork(watchProductosFetch),
    fork(watchAddProducto),
    fork(watchFetchCompras),
    fork(watchAddCompra),
    fork(watchExpireCompra),
    fork(watchEndCompras),
  ]);
}

export default mainSaga;
