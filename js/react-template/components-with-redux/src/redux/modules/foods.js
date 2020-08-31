import { call, put, takeLatest } from "redux-saga/effects";
import * as foodApi from "../../api/foods";

/* action 및 action creator */
const GET_FOODS = "GET_FOODS";
const GET_FOODS_SUCCESS = "GET_FOODS_SUCCESS";
const GET_FOODS_ERROR = "GET_FOODS_ERROR";

export const getFoods = () => ({ type: GET_FOODS });

/* saga for async */
function* getFoodsSaga() {
  try {
    const data = yield call(foodApi.getFoods);
    yield put({
      type: GET_FOODS_SUCCESS,
      data,
    });
  } catch (error) {
    yield put({
      type: GET_FOODS_ERROR,
      error,
    });
  }
}
export function* foodsSaga() {
  yield takeLatest(GET_FOODS, getFoodsSaga);
}

/* reducer */
const initialState = {
  loading: false,
  data: null,
  error: null,
};
export default function foods(state = initialState, action) {
  switch (action.type) {
    case GET_FOODS:
      return {
        loading: true,
        data: null,
        error: null,
      };
    case GET_FOODS_SUCCESS:
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case GET_FOODS_ERROR:
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      return state;
  }
}
