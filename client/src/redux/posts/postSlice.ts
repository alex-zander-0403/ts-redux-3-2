import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import type { PostTypeDb } from '../../types/postTypes';
import { addPostThunk, deletePostThunk, getPostsThunk } from './postThunk';

// типизация постов
type PostState = {
  posts: PostTypeDb[];
};

// начальное значение
const initialState: PostState = {
  posts: [],
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPostsThunk.fulfilled, (state, { payload }) => {
      state.posts = payload;
    });
    builder.addCase(addPostThunk.fulfilled, (state, { payload }) => {
      state.posts.push(payload);
    });
    builder.addCase(deletePostThunk.fulfilled, (state, { payload }) => {
      const index = state.posts.findIndex((el) => el.id === payload);
      state.posts.splice(index, 1);
    });
  },
});

export default postSlice.reducer;
