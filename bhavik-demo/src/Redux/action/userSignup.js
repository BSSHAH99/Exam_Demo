import axios from "axios";
import validation from "../../Component/validation";
import { ActionType } from "./action-type";

export const signUpOnChange = (key, value) => (dispatch, getState) => {
  const state = getState();
  const { user } = state.userSignupReducer;

  const newError = validation(key, value);
  dispatch(issignUpError({ [key]: newError }));

  const userData = { ...user, [key]: value };
  dispatch({ type: ActionType.SIGN_UP_ON_CHANGE, payload: userData });
};

export const signUpRequest = () => {
  console.log("sigsignUpRequest is calling");
  return async (dispatch, getState) => {
    const state = getState();
    const userData = state.userSignupReducer.user;
    // console.log("this is data of data", userData);
    await axios
      .post(`${process.env.REACT_APP_API_DOMAIN}/users/SignUp`, userData)
      .then((res) => {
        dispatch(signUpSuccess(res.data.message));
        dispatch(signUpClear(res.data));
      })
      .catch((error) => dispatch(signUpFailure(error.message)));
  };
};

export const issignUpError = (validat) => {
  return {
    type: ActionType.IS_SIGN_UP_ERROR,
    payload: validat,
  };
};
export const signUpSuccess = (message) => {
  return {
    type: ActionType.SIGN_UP_SUCCESS,
    payload: message,
  };
};

export const signUpFailure = (error) => {
  return {
    type: ActionType.SIGN_UP_FAILURE,
    payload: error,
  };
};

export const signUpClear = (data) => {
  return {
    type: ActionType.SIGN_UP_CLEAR,
    payload: data,
  };
};
