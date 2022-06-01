import { IFetchOptions } from '../../models/index';
import { IPostPost } from '../../../models/IPost';

const URL = process.env.REACT_APP_API_URL;

// const headers = (token: string) => ({
//   Authorization: `Bearer ${token}`,
//   Accept: 'application/json',
//   'Content-Type': 'application/json',
// });

const headers = () => ({
  Accept: 'application/json',
  'Content-Type': 'application/json',
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getPosts: (): IFetchOptions => ({
    url: `${URL}/posts`,
    params: {
      method: 'GET'
    },
  }),
  postPost: (post: IPostPost): IFetchOptions => ({
    url: `${URL}/posts`,
    params: {
      method: 'POST',
      body: JSON.stringify(post),
    }
  }),
  putPost: (id: string, post: IPostPost): IFetchOptions => ({
    url: `${URL}/posts/${id}`,
    params: {
      method: 'PUT',
      body: JSON.stringify(post),
    }
  }),
  deletePost: (id: string): IFetchOptions => ({
    url: `${URL}/posts/${id}`,
    params: {
      method: 'DELETE',
    }
  }),
}