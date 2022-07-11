import axios from "axios";
import validation from "../../Component/validation";
import { ActionType } from "./action-type";

export const loginOnChange = (key, value) => (dispatch, getState) => {
  const state = getState();
  const { user } = state.userLoginReducer;

  const newError = validation(key, value);
  dispatch(isLoginError({ [key]: newError }));

  const userData = { ...user, [key]: value };
  dispatch({ type: ActionType.LOGIN_ON_CHANGE, payload: userData });
};

export const loginRequest = (navigate) => {
  return async (dispatch, getState) => {
    const state = getState();
    const userData = state.userLoginReducer.user;
    await axios
      .post(`${process.env.REACT_APP_API_DOMAIN}/users/Login`, userData)
      .then((res) => {
        if (res.data.statusCode === 200) {
          localStorage.setItem("access-token", res.data.data.token);
          localStorage.setItem("name", res.data.data.name);
          localStorage.setItem("role", res.data.data.role);
          if (res.data.data.role === "student") {
            navigate("/student-deshbord");
          } else if (res.data.data.role === "teacher") {
            navigate("/teacher-deshbord");
          }
        } else {
          dispatch(loginFailure(res.data.message));
        }
        dispatch(loginClear(res.data));
      })
      .catch((error) => dispatch(loginFailure(error.message)));
  };
};

export const isLoginError = (validat) => {
  return {
    type: ActionType.IS_LOGIN_ERROR,
    payload: validat,
  };
};
export const isValidLogin = (validat) => {
  return {
    type: ActionType.IS_VALID_LOGIN,
    payload: validat,
  };
};
export const isValidLoginSuccess = (validat) => {
  return {
    type: ActionType.IS_VALID_LOGIN_SUCCESS,
    payload: validat,
  };
};
export const isValidLoginFailure = (validat) => {
  return {
    type: ActionType.IS_VALID_LOGIN_FAILURE,
    payload: validat,
  };
};
export const loginSuccess = ({ data }) => {
  return {
    type: ActionType.LOGIN_SUCCESS,
    payload: data,
  };
};
export const loginFailure = (error) => {
  return {
    type: ActionType.LOGIN_FAILURE,
    payload: error,
  };
};
export const loginClear = (data) => {
  return {
    type: ActionType.LOGIN_CLEAR,
    payload: data,
  };
};
