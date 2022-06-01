import { IBaseFetch } from '../../models';
import IPost from '../../../models/IPost';


export interface IFetchedPostsReponse extends IBaseFetch {
  data: IPost[];
}

export interface IFetchedPostResponse extends IBaseFetch {
  data: IPost;
}

export interface IFetchedPostRejected extends IBaseFetch {
  error: string;
}
