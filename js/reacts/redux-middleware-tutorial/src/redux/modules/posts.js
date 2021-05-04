import * as api from "../../api/posts";
import {
  createPromiseSaga,
  createPromiseSagaById,
  reducerUtils,
  handleAsyncAction,
  handleAsyncActionsById,
} from "../../lib/asyncUtil";
import { takeEvery, getContext } from "redux-saga/effects";

const GET_POSTS = "posts/GET_POSTS";
const GET_POSTS_SUCCESS = "posts/GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "posts/GET_POSTS_ERROR";

const GET_POST = "posts/GET_POST";
const GET_POST_SUCCESS = "posts/GET_POST_SUCCESS";
const GET_POST_ERROR = "posts/GET_POST_ERROR";

const GO_TO_HOME = "posts/GO_TO_HOME";

export const getPosts = () => ({ type: GET_POSTS });
export const getPost = (id) => ({ type: GET_POST, payload: id, id });
export const goToHome = () => ({ type: GO_TO_HOME });

const getPostsSaga = createPromiseSaga(GET_POSTS, api.getPosts);
const getPostSaga = createPromiseSagaById(GET_POST, api.getPostById);
function* goToHomeSaga() {
  const history = yield getContext("history");
  history.push("/");
}

export function* postsSaga() {
  yield takeEvery(GET_POSTS, getPostsSaga);
  yield takeEvery(GET_POST, getPostSaga);
  yield takeEvery(GO_TO_HOME, goToHomeSaga);
}

// export const goToHome = () => (dispatch, getState, { history }) => {
//   history.push("/");
// };

const initialState = {
  posts: reducerUtils.initial(),
  post: {},
};

export default function posts(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_ERROR:
      return handleAsyncAction(GET_POSTS, "posts", true)(state, action);
    case GET_POST:
    case GET_POST_SUCCESS:
    case GET_POST_ERROR:
      return handleAsyncActionsById(GET_POST, "post")(state, action);
    default:
      return state;
  }
}
