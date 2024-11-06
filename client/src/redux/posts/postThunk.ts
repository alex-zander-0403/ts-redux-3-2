import { createAsyncThunk } from '@reduxjs/toolkit';
import postService from '../../services/postService';
import type { PostTypeDb, PostTypeForm } from '../../types/postTypes';

//
export const getPostsThunk = createAsyncThunk<PostTypeDb[]>('posts/getAll', async () => {
  const postsArray = await postService.getPosts(); // getPosts() из postService.ts
  return postsArray;
});

// <PostTypeDb(что ретернится), PostTypeForm(что отправляем)>
export const addPostThunk = createAsyncThunk<PostTypeDb, PostTypeForm>(
  'posts/addPost',
  async (myFormData) => {
    const newPost = await postService.addPost(myFormData); // addPost() из postService.ts
    return newPost;
  },
);

export const deletePostThunk = createAsyncThunk<PostTypeDb['id'], PostTypeDb['id']>(
  'posts/delete',
  async (id) => {
    await postService.deletePost(id); // deletePost() из postService.ts
    return id;
  },
);
