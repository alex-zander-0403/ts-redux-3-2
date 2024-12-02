import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import postReducer from './posts/postSlice';
import authReducer from './auth/authSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type StoreType = typeof store
