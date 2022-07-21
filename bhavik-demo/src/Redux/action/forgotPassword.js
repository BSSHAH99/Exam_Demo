import Api from "../../Services/apiInstance";
import validation from "../../Component/validation";
import { ActionType } from "./action-type";
import { toastSuccess, toastFailure } from "../action/toastAction";

export const forgotPasswordOnChange = (key, value) => (dispatch, getState) => {
  const state = getState();
  const { user } = state.forgotPasswordReducer;

  const newError = validation(key, value);
  dispatch(isForgotPasswordError({ [key]: newError }));

  const userData = { ...user, [key]: value };
  dispatch({ type: ActionType.FORGOT_PASSWORD_ON_CHANGE, payload: userData });
};

export const forgotPasswordRequest = (navigate) => {
  return async (dispatch, getState) => {
    const state = getState();
    const userData = state.forgotPasswordReducer.user;
    console.log("this is userData", userData);
    await Api.post("/users/ForgotPassword", userData)
      .then((res) => {
        if (res.data.statusCode === 200) {
          navigate("/login");
        }
        dispatch(toastSuccess(res.data.statusCode, res.data.message));
        dispatch(forgotPasswordClear());
      })
      .catch((error) => {
        dispatch(toastFailure(error));
        dispatch(forgotPasswordClear());
      });
  };
};
export const isForgotPasswordError = (validat) => {
  return {
    type: ActionType.IS_FORGOT_PASSWORD_ERROR,
    payload: validat,
  };
};
export const forgotPasswordSuccess = (statusCode, message) => {
  return {
    type: ActionType.FORGOT_PASSWORD_SUCCESS,
    payload: { statusCode: statusCode, message: message },
  };
};
export const forgotPasswordFailure = (error) => {
  return {
    type: ActionType.FORGOT_PASSWORD_FAILURE,
    payload: error,
  };
};

export const forgotPasswordClear = () => {
  return {
    type: ActionType.FORGOT_PASSWORD_CLEAR,
  };
};
