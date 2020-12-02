import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './modules';

const configureStore = (initialState) => {
  return createStore(rootReducer, composeWithDevTools());
}

export default configureStore;