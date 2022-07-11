import axios from "axios";
import validation from "../../Component/validation";
import { ActionType } from "./action-type";

export const newPasswor = {};

export const newPasswordOnChange = (key, value) => (dispatch, getState) => {
  // console.log(key, value);

  const state = getState();
  const userData = state.newPasswordReducer.user;
  const { user } = state.newPasswordReducer;

  const newError = validation(key, value, userData);
  dispatch(isNewPassworError({ [key]: newError }));

  const Data = { ...user, [key]: value };
  dispatch({ type: ActionType.NEW_PASSWORD_ON_CHANGE, payload: Data });
};

export const newPasswordTokenCheck = (token) => {
  return async (dispatch) => {
    await axios
      .get(`${process.env.REACT_APP_API_DOMAIN}/users/newPassword`, {
        headers: { "access-token": token },
      })
      .then((res) => {
        if (res.data.statusCode === 200) {
          dispatch(newPasswordRequest(token));
        } else {
          dispatch(newPasswordFailure(res.data.message));
        }
      })
      .catch((error) => dispatch(newPasswordFailure(error.message)));
  };
};

export const newPasswordRequest = (token) => {
  console.log("newPasswordRequest caling :>> ");
  return async (dispatch, getState) => {
    const state = getState();
    const userData = state.newPasswordReducer.user;
    await axios
      .post(
        `${process.env.REACT_APP_API_DOMAIN}/users/ForgotPassword/Verify?token=${token}`,
        userData
      )
      .then((res) => {
        // console.log(res.data);s
        dispatch(newPasswordSuccess(res.data.message));
        dispatch(newPasswordClear(res.data));
      })
      .catch((error) => dispatch(newPasswordFailure(error.message)));
  };
};

export const isNewPassworError = (validat) => {
  return {
    type: ActionType.IS_NEW_PASSWORD_ERROR,
    payload: validat,
  };
};
export const newPasswordSuccess = (message) => {
  return {
    type: ActionType.NEW_PASSWORD_SUCCESS,
    payload: message,
  };
};
export const newPasswordFailure = (error) => {
  return {
    type: ActionType.NEW_PASSWORD_FAILURE,
    payload: error,
  };
};

export const newPasswordClear = (data) => {
  return {
    type: ActionType.NEW_PASSWORD_CLEAR,
    payload: data,
  };
};

// if (key === "Password") {
//   const Password = { [key]: value };
//   Object.assign(newPasswor, Password);
// }

// if (key === "ConfirmPassword") {
//   const ConfirmPassword = { [key]: value };
//   Object.assign(newPasswor, ConfirmPassword);
// }
