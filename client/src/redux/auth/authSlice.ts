import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserStateType } from '../../types/userTypes';
import { authLoginThunk, authSignUpThunk, checkUserThunk, logoutThunk } from './authAsyncThunk';

export type AuthTypes = {
  accessToken: string;
  user: UserStateType;
};

const initialState: AuthTypes = {
  accessToken: '',
  user: { status: 'pending' },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    // для регистрации юзера
    builder.addCase(authSignUpThunk.fulfilled, (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.user = { status: 'logged', ...payload.user };
    });

    // для авторизации юзера
    builder.addCase(authLoginThunk.fulfilled, (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.user = { status: 'logged', ...payload.user };
    });

    // logout
    builder.addCase(logoutThunk.fulfilled, (state) => {
      state.accessToken = '';
      state.user = { status: 'guest' };
    });

    //
    builder.addCase(checkUserThunk.fulfilled, (state, { payload }) => {
      state.accessToken = payload.accessToken;
      state.user = { status: 'logged', ...payload.user };
    });

    builder.addCase(checkUserThunk.rejected, (state, { payload }) => {
      state.accessToken = '';
      state.user = { status: 'guest' };
    });
  },
});

export default authSlice.reducer;
