export type Status = {
  errorMessage?: string | null;
  isFetching?: boolean;
  timestamp?: string;
  success?: boolean;
  isError?: boolean;
  error?: string | null | Error;
  meta?: any;
};

export const UNKNOWN_ERROR_MESSAGE =
  'Ha ocurrido un error, por favor inténtelo de nuevo más tarde.';

export type ErrorStatus = Error | string | undefined | unknown;

export const parseErrorResponse = (error: any) => {
  if (!error) {
    return UNKNOWN_ERROR_MESSAGE;
  }
  if (typeof error === 'string') {
    return error;
  }
  if (!error.response) {
    return error.message || UNKNOWN_ERROR_MESSAGE;
  }
  if (typeof error.response === 'string') {
    return error.response;
  }
  const err = error.response?.errors;
  if (err && typeof err === 'object') {
    for (const key in err) {
      if (err.hasOwnProperty(key) && err[key]?.length) {
        return err[key][0];
      }
    }
  }
  if (error.response.data?.message) {
    return error.response.data?.message;
  }

  return UNKNOWN_ERROR_MESSAGE;
};

export const getDefaultStatus = () =>
  Object.freeze({
    isFetching: false,
    isError: false,
    errorMessage: null,
    error: null,
  }) as Status;

export const getStartStatus = () =>
  Object.freeze({
    isFetching: true,
    isError: false,
    errorMessage: null,
    error: null,
  }) as Status;

export const getSuccessStatus = (meta?: any) =>
  Object.freeze({
    timestamp: new Date().toISOString(),
    success: true,
    isFetching: false,
    isError: false,
    errorMessage: null,
    error: null,
    meta,
  }) as Status;

export const getErrorStatus = (error?: Error | string) =>
  Object.freeze({
    timestamp: new Date().toISOString(),
    isFetching: false,
    isError: true,
    errorMessage: parseErrorResponse(error),
    error,
  }) as Status;
