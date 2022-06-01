export interface IBaseFetch {
  message?: string;
}

export interface IFetchOptions {
  url: string;
  params: RequestInit;
}