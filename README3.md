1. Подготавливаем сервер для авторизации пользователя: база данных, роуты, мидлвары, конфиги и utils.
2. Подготавливаем формы Регистрации и Входа на клиентской части.
3. Описываем типы User в папке types /. Проверить в PostSchema наличие userId.
4. Создаем <authSlice.ts> и подключаем в store

```ts
export type AuthTypes = {
  accessToken: string;
  user: UserStateType;
};
```

```ts
const initialState: AuthTypes = {
  accessToken: "",
  user: { status: "pending" },
};
```

5. Создаем в папке services / <authService.ts> с необходимыми методами для регистрации, входа, выхода юзера и проверки наличия юзера
6. Добавляем в store.ts новый тип:

```js
export type StoreType = typeof store;
```

7. Добавляем в <axiosInstance.ts> новый store с помощью "инъекции":

```ts
let store: StoreType | undefined;
export const injectStore = (_store: StoreType): void => {
  store = _store;
};
```

8. Добавляем перехватчики запросов и ответов в <axiosInstance.ts>
9. Инициазируем `injectStore(store)` в main.ts
10. Добавляем в <authSlice.ts> в reducers метод `setAccessToken `:

```js
setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
},
```

11. Создаем файл <authAsyncThunk.ts> и пишем необходимые thunks: signInThunk, signUpThunk, logoutThunk, checkUserThunk.
12. Добавляем в <authSlice.ts> thunks в extraReducers. 
13. Создаем кастомный хук <useAuth.ts> и пишем необходимые хендлеры: sighUpHandler, loginHandler

14. Добавляем хендлеры на страницы Регистрации и Входа. Хендлер проверки наличия юзера добавляем в App.tsx
15. Добавить Лоадер в <Layuot.tsx>^ `<Loader isLoading={status === 'pending'}>`
https://www.npmjs.com/package/ldrs - для красивого лоудера