import { configureStore } from '@reduxjs/toolkit';
import managementReducer from '../pages/Management/slice';

export default configureStore({
  reducer: {
    management: managementReducer,
  },
});
