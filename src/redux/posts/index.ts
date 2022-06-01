import { createSlice } from '@reduxjs/toolkit';
import IPost from '../../models/IPost';
import { IPostState } from './models';
import { fetchAllPostsThunk, putPostThunk, postPostThunk } from './thunks';
import { RootState } from '../../store';
import { TFetchStatus, TFetchAction } from '../models';
import { deletePostThunk } from './thunks/index';

export const emptyPost: IPost = {
  _id: '',
  name: '',
  description: '',
  createdAt: '',
  updatedAt: '',
};

const initialState: IPostState = {
  posts: [],
  post: emptyPost,
  status: 'idle',
  action: 'idle',
  error: '',
};

export const postsSlice = createSlice({
  name: 'postsv2',
  initialState,
  reducers: {
    clearPosts: (state: IPostState) => {
      state.posts = [];
      state.status = 'idle';
      state.action = 'idle';
    },
    clearPost: (state: IPostState) => {
      state.post = emptyPost;
      state.status = 'idle';
      state.action = 'idle';
    },
  },
  extraReducers: (builder) => {
    /* Fetch posts */
    builder
      .addCase(fetchAllPostsThunk.pending, (state) => {
        state.status = 'loading';
        state.action = 'fetchAll';
      })
      .addCase(fetchAllPostsThunk.fulfilled, (state, action) => {
        state.posts = action.payload.data ? action.payload.data : [];
        state.status = 'success';
        state.action = 'fetchAll';
      })
      .addCase(fetchAllPostsThunk.rejected, (state) => {
        state.status = 'failed';
        state.action = 'fetchAll';
      });
    /* Post post */
    builder
      .addCase(postPostThunk.pending, (state) => {
        state.action = 'postOne';
        state.status = 'loading';
      })
      .addCase(postPostThunk.fulfilled, (state, action) => {
        state.action = 'postOne';
        state.status = 'success';
        state.post = action.payload.data ? action.payload.data : {};
        // toastSuccessMessage(action.payload.message as string);
      })
      .addCase(postPostThunk.rejected, (state, action) => {
        state.action = 'postOne';
        state.status = 'failed';
        // toastErrorMessage(action.payload as string);
      });
    /* Put post */
    builder
      .addCase(putPostThunk.pending, (state) => {
        state.action = 'putOne';
        state.status = 'loading';
      })
      .addCase(putPostThunk.fulfilled, (state, action) => {
        state.action = 'putOne';
        state.status = 'success';
        state.posts = action.payload.data ? action.payload.data : {};
        // toastSuccessMessage(action.payload.message as string);
      })
      .addCase(putPostThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.action = 'putOne';
        // toastErrorMessage(action.payload as string);
      });
    /* Delete post */
    builder
      .addCase(deletePostThunk.pending, (state) => {
        state.action = 'deleteOne';
        state.status = 'loading';
      })
      .addCase(deletePostThunk.fulfilled, (state, action) => {
        state.action = 'putOne';
        state.status = 'success';
        state.posts = action.payload.data ? action.payload.data : [];
        // toastSuccessMessage(action.payload.message as string);
      })
      .addCase(deletePostThunk.rejected, (state, action) => {
        state.action = 'putOne';
        state.status = 'failed';
        // toastErrorMessage(action.payload as string);
      });
  },
});

export const { clearPost, clearPosts } = postsSlice.actions;

export const getPost = (state: RootState): IPost =>
  state.post.post;

export const getPosts = (state: RootState): IPost[] =>
  state.post.posts;

export const getPostsStatus = (state: RootState): TFetchStatus =>
  state.post.status;

export const getPostAction = (state: RootState): TFetchAction =>
  state.post.action;

export default postsSlice.reducer;