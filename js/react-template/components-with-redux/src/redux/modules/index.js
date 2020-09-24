import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import foods, { foodsSaga } from "./foods";
import users, { usersSaga } from "./users";
import records, { recordsSaga } from "./records";
import tankDatas, { tankDatasSaga } from "./tankDatas";
import products, { productsSaga } from "./products";

const rootReducer = combineReducers({
  foods,
  users,
  records,
  tankDatas,
  products,
});

export function* rootSaga() {
  yield all([
    foodsSaga(),
    usersSaga(),
    recordsSaga(),
    tankDatasSaga(),
    productsSaga(),
  ]);
}
export default rootReducer;
