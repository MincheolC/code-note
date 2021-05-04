import { call, put, takeLatest } from "redux-saga/effects";
import * as productsApi from "../../api/products";

const GET_PRODUCTS = "GET_PRODUCTS";
const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR";

const UPDATE_PRODUCT = "UPDATE_PRODUCT";
const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS";
const UPDATE_PRODUCT_ERROR = "UPDATE_PRODUCT_ERROR";

const CREATE_PRODUCT = "CREATE_PRODUCT";
const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS";
const CREATE_PRODUCT_ERROR = "CREATE_PRODUCT_ERROR";

export const getProducts = () => ({ type: GET_PRODUCTS });
export const updateProduct = (data) => ({ type: UPDATE_PRODUCT, data });
export const createProduct = (data) => ({ type: CREATE_PRODUCT, data });

function* getProductsSaga() {
  try {
    const data = yield call(productsApi.getProducts);
    yield put({
      type: GET_PRODUCTS_SUCCESS,
      data,
    });
  } catch (error) {
    yield put({
      type: GET_PRODUCTS_ERROR,
      error,
    });
  }
}
function* updateProductSaga(action) {
  const { data } = action;
  try {
    yield call(productsApi.patchProduct, data);
    yield put({
      type: UPDATE_PRODUCT_SUCCESS,
      data,
    });
  } catch (error) {
    yield put({
      type: UPDATE_PRODUCT_ERROR,
      error,
    });
  }
}

function* createProductSaga(action) {
  const { data } = action;
  try {
    yield call(productsApi.postProduct, data);
    yield put({
      type: CREATE_PRODUCT_SUCCESS,
      data,
    });
  } catch (error) {
    yield put({
      type: CREATE_PRODUCT_ERROR,
      error,
    });
  }
}

export function* productsSaga() {
  yield takeLatest(GET_PRODUCTS, getProductsSaga);
  yield takeLatest(UPDATE_PRODUCT, updateProductSaga);
  yield takeLatest(CREATE_PRODUCT, createProductSaga);
}

const initialState = {
  loading: false,
  error: null,
  data: null,
};

export default function products(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        loading: true,
        error: null,
        data: null,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.data,
      };
    case GET_PRODUCTS_ERROR:
      return {
        loading: false,
        error: action.error,
        data: null,
      };
    case UPDATE_PRODUCT:
      return {
        loading: true,
        error: null,
        data: state.data,
      };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        loading: false,
        error: null,
        data: state.data.map((product) =>
          product.id === action.data.id ? { ...action.data } : product
        ),
      };
    case UPDATE_PRODUCT_ERROR:
      return {
        loading: false,
        error: action.error,
        data: state.data,
      };
    case CREATE_PRODUCT:
      return {
        loading: true,
        error: null,
        data: state.data,
      };
    case CREATE_PRODUCT_SUCCESS:
      return {
        loading: false,
        error: null,
        data: state.data.concat(action.data),
      };
    case CREATE_PRODUCT_ERROR:
      return {
        loading: false,
        error: action.error,
        data: state.data,
      };
    default:
      return state;
  }
}
