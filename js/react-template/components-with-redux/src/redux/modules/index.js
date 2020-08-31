import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import foods, { foodsSaga } from "./foods";
import users, { usersSaga } from "./users";

const rootReducer = combineReducers({
  foods,
  users,
});

export function* rootSaga() {
  yield all([foodsSaga(), usersSaga()]);
}
export default rootReducer;
