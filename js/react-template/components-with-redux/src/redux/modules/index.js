import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import foods, { foodsSaga } from "./foods";
import users, { usersSaga } from "./users";
import records, { recordsSaga } from "./records";

const rootReducer = combineReducers({
  foods,
  users,
  records,
});

export function* rootSaga() {
  yield all([foodsSaga(), usersSaga(), recordsSaga()]);
}
export default rootReducer;
