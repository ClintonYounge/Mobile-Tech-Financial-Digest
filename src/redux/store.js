import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    apple: {},
    samsung: {},
    xiaomi: {},
    google: {},
  },
});

export default store;
