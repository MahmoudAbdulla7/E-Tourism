import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice/AuthSlice'

const store = configureStore({
  reducer: {
    authReducer,
  },
});

export default store;