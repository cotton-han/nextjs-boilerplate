type ErrorText = {
  [key: string]: string;
};

export const CODE = {
  SUCCESS: '0000',
  UNKNOWN: '9999',
  INVALID: '1000',
  INTERNAL_SERVER_ERROR: '5000',
};

export const ERROR_TEXT: ErrorText = {
  '0000': 'Success',
  '9999': 'Unknown Error',
  '1000': 'Invalid Data',
  '5000': 'Internal Server Error',
};
