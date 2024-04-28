import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice/AuthSlice'
import CitiesReducer from './CitySlice/CitySlice'

const store = configureStore({
  reducer: {
    authReducer,CitiesReducer

  },
});

export default store;