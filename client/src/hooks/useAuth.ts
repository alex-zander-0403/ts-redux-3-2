import type React from 'react';
import { useAppDispatch } from './hook';
import { authLoginThunk, authSignUpThunk } from '../redux/auth/authAsyncThunk';
import type { UserLoginType, UserSignUpType } from '../types/userTypes';
import { useNavigate } from 'react-router-dom';

//
type UseAuthTypes = {
  signUpHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  loginHandler: (e: React.FormEvent<HTMLFormElement>) => void;
};

//
export default function useAuth(): UseAuthTypes {
  const navigate = useNavigate();
  //
  const dispatch = useAppDispatch();

  //
  const signUpHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as UserSignUpType;
    if (!data.email || !data.password || !data.username) return;
    void dispatch(authSignUpThunk(data));
    e.currentTarget.reset();
    navigate('/');
  };

  //
  const loginHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as UserLoginType;
    if (!data.email || !data.password) return;
    void dispatch(authLoginThunk(data));
    e.currentTarget.reset();
    navigate('/');
  };

  //
  return {
    signUpHandler,
    loginHandler,
  };
}
