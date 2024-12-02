// user с бека
export type UserType = {
  id: number;
  username: string;
  email: string;
  // password: string; // не будет на фронте
};

// user с формы регистрации без id и добавляем password
// export type UserSignUpType = Omit<UserType, 'id'> & { password: string };
export type UserSignUpType = {
  username: string;
  email: string;
  password: string;
};

// user с формы логина без name
export type UserLoginType = Omit<UserSignUpType, 'username'>;

// статусы user
export type UserStateType =
  | { status: 'pending' }
  | { status: 'guest' }
  | ({ status: 'logged' } & UserType);

// с бека с токеном
export type UserState = { accessToken: string; user: UserStateType };
