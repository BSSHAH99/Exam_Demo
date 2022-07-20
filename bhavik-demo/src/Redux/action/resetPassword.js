import axios from "axios";
import validation from "../../Component/validation";
import Api from "../../Services/apiInstance";
import { ActionType } from "./action-type";

export const resetPassword = {};

export const resetPasswordOnChange = (key, value) => (dispatch, getState) => {
  // if (key === "Password") {
  //   const Password = { [key]: value };
  //   Object.assign(resetPassword, Password);
  // }

  // if (key === "ConfirmPassword") {
  //   const ConfirmPassword = { [key]: value };
  //   Object.assign(resetPassword, ConfirmPassword);
  // }
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
        dispatch(resetPasswordSuccess(res.data.statusCode, res.data.message));
        setTimeout(() => {
          dispatch(resetPasswordClear());
        }, 5000);
      })
      .catch((error) => {
        dispatch(resetPasswordFailure(error));
        setTimeout(() => {
          dispatch(resetPasswordClear());
        }, 5000);
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
