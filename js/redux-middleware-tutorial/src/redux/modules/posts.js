import * as api from "../../api/posts";
import {
  createPromiseThunk,
  createPromiseThunkById,
  reducerUtils,
  handleAsyncAction,
  handleAsyncActionsById,
} from "../../lib/asyncUtil";

const GET_POSTS = "posts/GET_POSTS";
const GET_POSTS_SUCCESS = "posts/GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "posts/GET_POSTS_ERROR";

const GET_POST = "posts/GET_POST";
const GET_POST_SUCCESS = "posts/GET_POST_SUCCESS";
const GET_POST_ERROR = "posts/GET_POST_ERROR";

export const getPosts = createPromiseThunk(GET_POSTS, api.getPosts);
export const getPost = createPromiseThunkById(GET_POST, api.getPostById);

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
