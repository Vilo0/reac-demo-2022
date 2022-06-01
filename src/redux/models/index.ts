/* istanbul ignore file */
export type TFetchAction =
  | 'idle'
  | 'fetchAll'
  | 'fetchOne'
  | 'postOne'
  | 'putOne'
  | 'deleteOne'
  | 'fetchCredentials';
export type TFetchStatus = 'idle' | 'loading' | 'failed' | 'success';

export interface IBaseState {
  action: TFetchAction;
  status: TFetchStatus;
}
