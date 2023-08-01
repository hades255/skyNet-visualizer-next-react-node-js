import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import portfolioReducer from './portfolioSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    portfolio: portfolioReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export default store;
