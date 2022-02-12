export interface IListResApi<T> {
  results: T;
  page?: number;
  total_results?: number;
  total_pages?: number;
}

export interface IListReqParamsApi {
  page?: number;
  with_genres?: number;
}
