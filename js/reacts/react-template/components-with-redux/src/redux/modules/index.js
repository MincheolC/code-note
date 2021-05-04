import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import foods, { foodsSaga } from './foods';
import users, { usersSaga } from './users';
import records, { recordsSaga } from './records';
import tankDatas, { tankDatasSaga } from './tankDatas';
import products, { productsSaga } from './products';
import batchDatas, { batchDatasSaga } from './batchDatas';

const rootReducer = combineReducers({
  foods,
  users,
  records,
  tankDatas,
  products,
  batchDatas,
});

export function* rootSaga() {
  yield all([
    foodsSaga(),
    usersSaga(),
    recordsSaga(),
    tankDatasSaga(),
    productsSaga(),
    batchDatasSaga(),
  ]);
}
export default rootReducer;
