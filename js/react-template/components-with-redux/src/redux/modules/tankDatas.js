import * as tankDataApi from "../../api/tankDatas";
import { call, put, takeEvery } from "redux-saga/effects";

const GET_TANK_DATAS = "GET_TANK_DATAS";
const GET_TANK_DATAS_SUCCESS = "GET_TANK_DATAS_SUCCESS";
const GET_TANK_DATAS_ERROR = "GET_TANK_DATAS_ERROR";

export const getTankDatas = () => ({
  type: GET_TANK_DATAS,
});

function* getTankDatasSaga() {
  try {
    const tankDatas = yield call(tankDataApi.getTankDatas);
    yield put({
      type: GET_TANK_DATAS_SUCCESS,
      tankDatas,
    });
  } catch (error) {
    yield put({
      type: GET_TANK_DATAS_ERROR,
      error,
    });
  }
}

export function* tankDatasSaga() {
  yield takeEvery(GET_TANK_DATAS, getTankDatasSaga);
}

const initialState = {
  loading: false,
  tankDatas: null,
  error: null,
};

export default function tankDatas(state = initialState, action) {
  switch (action.type) {
    case GET_TANK_DATAS:
      return {
        loading: true,
        tankDatas: null,
        error: null,
      };
    case GET_TANK_DATAS_SUCCESS:
      return {
        loading: false,
        tankDatas: action.tankDatas,
        error: null,
      };
    case GET_TANK_DATAS_ERROR:
      return {
        loading: false,
        tankDatas: state.tankDatas,
        error: action.error,
      };
    default:
      return state;
  }
}
