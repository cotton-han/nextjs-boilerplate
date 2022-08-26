import axios, { AxiosError } from 'axios';

import { ErrorResponse } from 'types/api/response';

import { CODE, ERROR_TEXT } from './code';

export class ApiError extends Error {
  code: string;

  constructor(code: string, message: string) {
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ApiError);
    }

    this.code = code;
  }
}

export const handleError = (err: AxiosError): Error => {
  let code;
  if (axios.isAxiosError(err)) {
    code = (err.response?.data as ErrorResponse).code || CODE.UNKNOWN;
  } else {
    code = CODE.UNKNOWN;
  }

  const message = ERROR_TEXT[code] || ERROR_TEXT[CODE.UNKNOWN];
  throw new ApiError(code, message);
};
