import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface PostsService {
  entities: any
  loading: 'idle' | 'pending' | 'succeeded' | 'failed',
  post: any,
  deleted: boolean;
}

const initialState = {
  entities: [],
  loading: 'idle',
  post: {},
  deleted: false,
} as PostsService;

export const getPosts = createAsyncThunk(
  //action type string
  'posts/getPosts',
  // callback function
  async (thunkAPI) => {
    const res = await fetch('http://localhost:8000/posts').then(
    (data) => data.json()
  )
  return res
})

export const createPost = createAsyncThunk(
  'posts/addPost',
  async (post: any, { rejectWithValue }) => {
    try {
      const response = await fetch(
        'http://localhost:8000/posts',
        {
          method: 'POST',
          body: JSON.stringify(post),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      const data = await response.json()
      return data
    } catch (err) {
      // You can choose to use the message attached to err or write a custom error
      return rejectWithValue('Opps there seems to be an error')
    }
  }
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `http://localhost:8000/posts/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      const data = await response.json()
      return data
    } catch (err) {
      // You can choose to use the message attached to err or write a custom error
      return rejectWithValue('Opps there seems to be an error')
    }
  }
);

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET - Post
      .addCase(getPosts.pending, (state, action: any) => {
        state.loading = 'pending';
      })
      .addCase(getPosts.fulfilled, (state, action: any) => {
        state.loading = 'succeeded';
        state.entities = action.payload;
      })
      .addCase(getPosts.rejected, (state, action: any) => {
        state.loading = 'failed';
        state.entities = [];
      })
      // POST - Post
      .addCase(createPost.pending, (state) => {
        state.loading = 'pending';
        state.post = {};
      })
      .addCase(createPost.fulfilled, (state, action: any) => {
        state.loading = 'succeeded';
        state.post = action.payload;
      })
      .addCase(createPost.rejected, (state) => {
        state.loading = 'failed';
        state.post = {};
      })
      // DELETE - Post
      .addCase(deletePost.pending, (state) => {
        state.loading = 'pending';
        state.deleted = false;
      })
      .addCase(deletePost.fulfilled, (state) => {
        state.loading = 'succeeded';
        state.deleted = true;
      })
      .addCase(deletePost.rejected, (state) => {
        state.loading = 'failed';
        state.entities = [];
        state.deleted = false;
      })
  },
});

export default postSlice.reducer;