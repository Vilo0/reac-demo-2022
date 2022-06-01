import { IFetchResponse } from '../../models/IFetch';
import IPost from '../../models/IPost';
import URL from './url';
import { IPostPost } from '../../models/IPost';

export const fetchAllPosts = async (): Promise<IFetchResponse<IPost[]>> => {
  const { url, params } = URL.getPosts();
  const response = await fetch(url, params);
  const data = await response.json();
  return data;
}

export const createPost = async (post: IPostPost): Promise<IFetchResponse<IPost[]>> => {
  const { url, params } = URL.postPost(post);
  const response = await fetch(url, params);
  const data = await response.json();
  return data;
}

export const updatePost = async (id: string, post: IPostPost): Promise<IFetchResponse<IPost[]>> => {
  const { url, params } = URL.putPost(id, post);
  const response = await fetch(url, params);
  const data = await response.json();
  return data;
}

export const deletePost = async (id: string): Promise<IFetchResponse<IPost[]>> => {
  const { url, params } = URL.deletePost(id);
  const response = await fetch(url, params);
  const data = await response.json();
  return data;
}