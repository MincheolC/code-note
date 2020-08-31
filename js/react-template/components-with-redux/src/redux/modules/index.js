import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import foods, { foodsSaga } from "./foods";

const rootReducer = combineReducers({
  foods,
});

export function* rootSaga() {
  yield all([foodsSaga()]);
}
export default rootReducer;
