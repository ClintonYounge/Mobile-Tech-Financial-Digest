import { configureStore } from '@reduxjs/toolkit';
import appleReducer from './apple/appleSlice';
import samsungReducer from './samsung/samsungSlice';
import xiaomiReducer from './xiaomi/xiaomiSlice';
import googleReducer from './google/googleSlice';

const store = configureStore({
  reducer: {
    apple: appleReducer,
    samsung: samsungReducer,
    xiaomi: xiaomiReducer,
    google: googleReducer,
  },
});

export default store;
