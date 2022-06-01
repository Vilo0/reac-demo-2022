export default interface IPost {
  _id?: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export const emptyPost: IPost = {
  _id: '',
  name: '',
  description: '',
  createdAt: '',
  updatedAt: '',
}

export type IPostPost = Pick<IPost, 'name' | 'description'>;