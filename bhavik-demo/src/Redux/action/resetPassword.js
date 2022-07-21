import axios from "axios";
import validation from "../../Component/validation";
import Api from "../../Services/apiInstance";
import { ActionType } from "./action-type";
import { toastSuccess, toastFailure } from "../action/toastAction";

export const resetPassword = {};

export const resetPasswordOnChange = (key, value) => (dispatch, getState) => {
  const state = getState();
  const { user } = state.resetPasswordReducer;
  const userData = state.resetPasswordReducer.user;
  const newError = validation(key, value, userData);
  dispatch(isResetPasswordError({ [key]: newError }));

  const Data = { ...user, [key]: value };
  dispatch({ type: ActionType.RESET_PASSWORD_ON_CHANGE, payload: Data });
};

export const resetPasswordRequest = () => {
  return async (dispatch, getState) => {
    const state = getState();
    const userData = state.resetPasswordReducer.user;
    await Api.post("/users/ResetPassword", userData)
      .then((res) => {
        dispatch(toastSuccess(res.data.statusCode, res.data.message));
        dispatch(resetPasswordClear());
      })
      .catch((error) => {
        dispatch(toastFailure(error));
        dispatch(resetPasswordClear());
      });
  };
};

export const isResetPasswordError = (message) => {
  return {
    type: ActionType.IS_RESET_PASSWORD_ERROR,
    payload: message,
  };
};
export const resetPasswordSuccess = (statusCode, message) => {
  return {
    type: ActionType.RESET_PASSWORD_SUCCESS,
    payload: { statusCode: statusCode, message: message },
  };
};
export const resetPasswordFailure = (error) => {
  return {
    type: ActionType.RESET_PASSWORD_FAILURE,
    payload: error,
  };
};

export const resetPasswordClear = () => {
  return {
    type: ActionType.RESET_PASSWORD_CLEAR,
  };
};
