import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../../services/authService';
import { UserLoginType, UserSignUpType, UserState } from '../../types/userTypes';
import { AxiosResponse } from 'axios';

export const authSignUpThunk = createAsyncThunk<UserState, UserSignUpType>(
  'auth/signup',
  async (userData) => authService.authSignUp(userData),
);

export const authLoginThunk = createAsyncThunk<UserState, UserLoginType>(
  'auth/login',
  async (userData) => authService.authLogin(userData),
);

export const logoutThunk = createAsyncThunk<AxiosResponse>('auth/logout', async () =>
  authService.authLogout(),
);

export const checkUserThunk = createAsyncThunk<UserState>(
  'auth/check',
  async () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        authService.checkUser().then(resolve).catch(reject);
      }, 1000);
    }),
);
