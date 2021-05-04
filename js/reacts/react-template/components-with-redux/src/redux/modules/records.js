import * as recordApi from "../../api/records";
import { call, put, takeEvery } from "redux-saga/effects";

const GET_RECORDS = "GET_RECORDS";
const GET_RECORDS_SUCCESS = "GET_RECORDS_SUCCESS";
const GET_RECORDS_ERROR = "GET_RECORDS_ERROR";

export const getRecords = () => ({
  type: GET_RECORDS,
});

function* getRecordsSaga() {
  try {
    const records = yield call(recordApi.getRecords);
    yield put({
      type: GET_RECORDS_SUCCESS,
      records,
    });
  } catch (error) {
    yield put({
      type: GET_RECORDS_ERROR,
      error,
    });
  }
}

export function* recordsSaga() {
  yield takeEvery(GET_RECORDS, getRecordsSaga);
}

const initialState = {
  loading: false,
  records: null,
  error: null,
};

export default function records(state = initialState, action) {
  switch (action.type) {
    case GET_RECORDS:
      return {
        loading: true,
        records: null,
        error: null,
      };
    case GET_RECORDS_SUCCESS:
      return {
        loading: false,
        records: action.records,
        error: null,
      };
    case GET_RECORDS_ERROR:
      return {
        loading: false,
        records: state.records,
        error: action.error,
      };
    default:
      return state;
  }
}
