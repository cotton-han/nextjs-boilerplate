export type ResponseBody<T> = SuccessResponse<T> | ErrorResponse;

export interface ErrorResponse {
  code: string;
  error?: Error;
}

export interface SuccessResponse<T = any> {
  code: string;
  data?: T;
}
