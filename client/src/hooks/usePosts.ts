import type React from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hook';
import { addPostThunk, deletePostThunk, getPostsThunk } from '../redux/posts/postThunk';
import type { PostTypeDb, PostTypeForm } from '../types/postTypes';

type UsePostsTypes = {
  posts: PostTypeDb[];
  submitHandler: (e: React.FormEvent<HTMLFormElement>) => void;
  deleteHandler: (id: PostTypeDb['id']) => void;
};

export default function usePosts(): UsePostsTypes {
  const posts = useAppSelector((store) => store.posts.posts); // store.posts -> posts(из slice)
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(getPostsThunk());
  }, []);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataForm = Object.fromEntries(new FormData(e.currentTarget)) as PostTypeForm;
    void dispatch(addPostThunk(dataForm));
    e.currentTarget.reset();
  };

  const deleteHandler = (id: PostTypeDb['id']) => {
    void dispatch(deletePostThunk(id));
  };

  return { posts, submitHandler, deleteHandler };
}
