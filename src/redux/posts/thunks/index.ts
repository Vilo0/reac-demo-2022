import { createAsyncThunk } from '@reduxjs/toolkit';

import { IFetchedPostsReponse } from '../../../services/posts/models';
import { fetchAllPosts, createPost, deletePost, updatePost } from '../../../services/posts';
import { IPostPost } from '../../../models/IPost';


export const fetchAllPostsThunk = createAsyncThunk(
  'postsv2/fetch',
  async (token: string, { rejectWithValue }) => {
    try {
      const data: IFetchedPostsReponse = await fetchAllPosts();
      // if (data !== 200) {
      //   throw new Error(data.message);
      // }
      return data;
    } catch (error) {
      /*  */
      return rejectWithValue((error as Error).message);
    }
  }
);

export const postPostThunk = createAsyncThunk(
  'postsv2/post',
  async ({ post }: { post: IPostPost }, { rejectWithValue }) => {
    try {
      const data: any = await createPost(post);
      // if (data !== 200) {
      //   throw new Error(data.message);
      // }
      return data;
    } catch (error) {
      /*  */
      return rejectWithValue((error as Error).message);
    }
  }
);

export const putPostThunk = createAsyncThunk(
  'postsv2/put',
  async ({ id, post }: { id: string, post: IPostPost }, { rejectWithValue }) => {
    try {
      const data: any = await updatePost(id, post);
      // if (data !== 200) {
      //   throw new Error(data.message);
      // }
      return data;
    } catch (error) {
      /*  */
      return rejectWithValue((error as Error).message);
    }
  }
);

export const deletePostThunk = createAsyncThunk(
  'postsv2/delete',
  async ({ id }: { id: string }, { rejectWithValue }) => {
    try {
      const data: any = await deletePost(id);
      // if (data !== 200) {
      //   throw new Error(data.message);
      // }
      return data;
    } catch (error) {
      /*  */
      return rejectWithValue((error as Error).message);
    }
  }
);