
import { TFetchAction, TFetchStatus } from '../../models';
import IPost from '../../../models/IPost';
import { IBaseState } from '../../models';

export interface IPostState extends IBaseState {
  posts: IPost[];
  post: IPost;
  error: string;
}