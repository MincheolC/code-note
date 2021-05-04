import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import base from './base';
import auth, { authSaga } from './auth';

export default combineReducers({
  base,
  auth,
});

export function* rootSaga() {
  yield all([
    authSaga(),
  ]);
}