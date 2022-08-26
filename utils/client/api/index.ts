import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

import { ErrorResponse, SuccessResponse } from 'types/api/response';

import { handleError } from './error';
import { defaultLog, errorLog } from './log';

export const api = axios.create({
  baseURL: `${process.env.API_URL}${process.env.API_BASE_PATH}`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const isDevelopment = process.env.NODE_ENV === 'development';

api.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    if (isDevelopment) defaultLog('request', config);

    // TODO: 헤더 지정

    return config;
  },
  (error: AxiosError) => {
    if (isDevelopment) {
      if (error.request) errorLog('request error', error.request);
      else errorLog('request error', error);
    }
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (response: AxiosResponse<SuccessResponse>) => {
    if (isDevelopment) defaultLog('response', response);

    return response.data;
  },
  (error: AxiosError<ErrorResponse>) => {
    if (isDevelopment) {
      if (error.response) {
        errorLog('response error', error.response);
      } else {
        errorLog('response error', error);
      }
    }

    // 특정 상태 코드에 대한 에러 처리
    if (error.response?.status === 401) {
      // TODO: redirect login page or update session or request refresh token
    }

    return Promise.reject(handleError(error));
  },
);
