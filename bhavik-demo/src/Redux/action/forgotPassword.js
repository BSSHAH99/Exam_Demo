import axios from "axios";
import validation from "../../Component/validation";
import { ActionType } from "./action-type";

export const forgotPasswordOnChange = (key, value) => (dispatch, getState) => {
  const state = getState();
  const { user } = state.forgotPasswordReducer;

  const newError = validation(key, value);
  dispatch(isForgotPasswordError({ [key]: newError }));

  const userData = { ...user, [key]: value };
  dispatch({ type: ActionType.FORGOT_PASSWORD_ON_CHANGE, payload: userData });
};

// console.log(process.env.REACT_APP_API_DOMAIN);

export const forgotPasswordRequest = (navigate) => {
  return async (dispatch, getState) => {
    const state = getState();
    const userData = state.forgotPasswordReducer.user;
    console.log("this is userData", userData);
    await axios
      .post(
        `${process.env.REACT_APP_API_DOMAIN}/users/ForgotPassword`,
        userData
      )
      .then((res) => {
        dispatch(forgotPasswordSuccess(res.data.message));
        // setTimeout(console.log("hii bhavik shah"), 5000);
        // setTimeout(myGreeting, 5000);
        dispatch(forgotPasswordClear(res.data));
      })
      .catch((error) => dispatch(forgotPasswordFailure(error.message)));
  };
};
export const isForgotPasswordError = (validat) => {
  return {
    type: ActionType.IS_FORGOT_PASSWORD_ERROR,
    payload: validat,
  };
};
export const forgotPasswordSuccess = (message) => {
  return {
    type: ActionType.FORGOT_PASSWORD_SUCCESS,
    payload: message,
  };
};
export const forgotPasswordFailure = (error) => {
  return {
    type: ActionType.FORGOT_PASSWORD_FAILURE,
    payload: error,
  };
};

export const forgotPasswordClear = (data) => {
  return {
    type: ActionType.FORGOT_PASSWORD_CLEAR,
    payload: data,
  };
};
