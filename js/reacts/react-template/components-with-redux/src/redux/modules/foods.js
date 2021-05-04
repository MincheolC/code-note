import { call, put, takeLatest } from "redux-saga/effects";
import * as foodsApi from "../../api/foods";

/* action 및 action creator */
const GET_FOODS = "GET_FOODS";
const GET_FOODS_SUCCESS = "GET_FOODS_SUCCESS";
const GET_FOODS_ERROR = "GET_FOODS_ERROR";

const UPDATE_FOOD = "UPDATE_FOOD";
const UPDATE_FOOD_SUCCESS = "UPDATE_FOOD_SUCCESS";
const UPDATE_FOOD_ERROR = "UPDATE_FOOD_ERROR";

const REMOVE_FOOD = "REMOVE_FOOD";
const REMOVE_FOOD_SUCCESS = "REMOVE_FOOD_SUCCESS";
const REMOVE_FOOD_ERROR = "REMOVE_FOOD_ERROR";

export const getFoods = () => ({ type: GET_FOODS });
export const updateFood = (data) => ({ type: UPDATE_FOOD, data });
export const removeFood = (id) => ({ type: REMOVE_FOOD, id });

/* saga for async */
function* getFoodsSaga() {
  try {
    const data = yield call(foodsApi.getFoods);
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
function* updateFoodSaga(action) {
  const { data } = action;
  try {
    yield call(foodsApi.patchFood, data);
    yield put({
      type: UPDATE_FOOD_SUCCESS,
      data,
    });
  } catch (error) {
    yield put({
      type: UPDATE_FOOD_ERROR,
      error,
    });
  }
}
function* removeFoodSaga(action) {
  const { id } = action;
  try {
    yield call(foodsApi.deleteFood, id);
    yield put({
      type: REMOVE_FOOD_SUCCESS,
      id,
    });
  } catch (error) {
    yield put({
      type: REMOVE_FOOD_ERROR,
      error,
    });
  }
}

export function* foodsSaga() {
  yield takeLatest(GET_FOODS, getFoodsSaga);
  yield takeLatest(UPDATE_FOOD, updateFoodSaga);
  yield takeLatest(REMOVE_FOOD, removeFoodSaga);
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
    case UPDATE_FOOD:
      return {
        loading: true,
        error: null,
        data: state.data,
      };
    case UPDATE_FOOD_SUCCESS:
      return {
        loading: false,
        error: null,
        data: state.data.map((food) =>
          food.id === action.data.id ? { ...action.data } : food
        ),
      };
    case UPDATE_FOOD_ERROR:
      return {
        loading: false,
        error: action.error,
        data: state.data,
      };
    case REMOVE_FOOD:
      return {
        loading: true,
        error: null,
        data: state.data,
      };
    case REMOVE_FOOD_SUCCESS:
      return {
        loading: false,
        error: null,
        data: state.data.filter((food) => food.id !== action.id),
      };
    case REMOVE_FOOD_ERROR:
      return {
        loading: false,
        error: action.error,
        data: state.data,
      };
    default:
      return state;
  }
}
