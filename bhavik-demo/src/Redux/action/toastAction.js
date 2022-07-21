import { ActionType } from "./action-type";

export const toastSuccess = (statusCode, message) => {
  return {
    type: ActionType.TOAST_SUCCESS,
    payload: { statusCode: statusCode, message: message },
  };
};

export const toastFailure = (error) => {
  return {
    type: ActionType.TOAST_FAILURE,
    payload: error,
  };
};

export const toastClear = () => {
  return {
    type: ActionType.TOAST_CLEAR,
  };
};
