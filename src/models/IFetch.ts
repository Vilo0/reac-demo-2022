interface IBaseFetch {
  message?: string;
}

export interface IFetchResponse<T> extends IBaseFetch {
  data: T;
}

export interface IFetchReject extends IBaseFetch {
  error: string;
}
