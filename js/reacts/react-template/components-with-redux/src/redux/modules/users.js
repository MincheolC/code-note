import { call, put, takeLatest } from "redux-saga/effects";
import * as usersApi from "../../api/users";

const GET_USERS = "GET_USERS";
const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
const GET_USERS_ERROR = "GET_USERS_ERROR";

const UPDATE_USER = "UPDATE_USER";
const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
const UPDATE_USER_ERROR = "UPDATE_USER_ERROR";

const REMOVE_USER = "REMOVE_USER";
const REMOVE_USER_SUCCESS = "REMOVE_USER_SUCCESS";
const REMOVE_USER_ERROR = "REMOVE_USER_ERROR";

const CREATE_USER = "CREATE_USER";
const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
const CREATE_USER_ERROR = "CREATE_USER_ERROR";

export const getUsers = () => ({ type: GET_USERS });
export const updateUser = (data) => ({ type: UPDATE_USER, data });
export const removeUser = (id) => ({ type: REMOVE_USER, id });
export const createUser = (data) => ({ type: CREATE_USER, data });

function* getUsersSaga() {
  try {
    const data = yield call(usersApi.getUsers);
    yield put({
      type: GET_USERS_SUCCESS,
      data,
    });
  } catch (error) {
    yield put({
      type: GET_USERS_ERROR,
      error,
    });
  }
}
function* updateUserSaga(action) {
  const { data } = action;
  try {
    yield call(usersApi.patchUser, data);
    yield put({
      type: UPDATE_USER_SUCCESS,
      data,
    });
  } catch (error) {
    yield put({
      type: UPDATE_USER_ERROR,
      error,
    });
  }
}
function* removeUserSaga(action) {
  const { id } = action;
  try {
    yield call(usersApi.deleteUser, id);
    yield put({
      type: REMOVE_USER_SUCCESS,
      id,
    });
  } catch (error) {
    yield put({
      type: REMOVE_USER_ERROR,
      error,
    });
  }
}
function* createUserSaga(action) {
  const { data } = action;
  try {
    yield call(usersApi.createUser, data);
    yield put({
      type: CREATE_USER_SUCCESS,
      data,
    });
  } catch (error) {
    yield put({
      type: CREATE_USER_ERROR,
      error,
    });
  }
}

export function* usersSaga() {
  yield takeLatest(GET_USERS, getUsersSaga);
  yield takeLatest(UPDATE_USER, updateUserSaga);
  yield takeLatest(REMOVE_USER, removeUserSaga);
  yield takeLatest(CREATE_USER, createUserSaga);
}

const initialState = {
  loading: false,
  error: null,
  data: null,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        loading: true,
        error: null,
        data: null,
      };
    case GET_USERS_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.data,
      };
    case GET_USERS_ERROR:
      return {
        loading: false,
        error: action.error,
        data: null,
      };
    case UPDATE_USER:
      return {
        loading: true,
        error: null,
        data: state.data,
      };
    case UPDATE_USER_SUCCESS:
      return {
        loading: false,
        error: null,
        data: state.data.map((user) =>
          user.id === action.data.id ? { ...action.data } : user
        ),
      };
    case UPDATE_USER_ERROR:
      return {
        loading: false,
        error: action.error,
        data: state.data,
      };
    case REMOVE_USER:
      return {
        loading: true,
        error: null,
        data: state.data,
      };
    case REMOVE_USER_SUCCESS:
      return {
        loading: false,
        error: null,
        data: state.data.filter((user) => user.id !== action.id),
      };
    case REMOVE_USER_ERROR:
      return {
        loading: false,
        error: action.error,
        data: state.data,
      };
    case CREATE_USER:
      return {
        loading: true,
        error: null,
        data: state.data,
      };
    case CREATE_USER_SUCCESS:
      return {
        loading: false,
        error: null,
        data: state.data.concat(action.data),
      };
    case CREATE_USER_ERROR:
      return {
        loading: false,
        error: action.error,
        data: state.data,
      };
    default:
      return state;
  }
}
