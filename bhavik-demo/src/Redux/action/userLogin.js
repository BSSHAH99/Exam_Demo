import validation from "../../Component/validation";
import { ActionType } from "./action-type";
import Api from "../../Services/apiInstance";

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
    await Api.post("/users/Login", userData)

      .then((res) => {
        dispatch(loginSuccess(res.data.statusCode, res.data.message));
        console.log("res.datas :>> ", res.data);
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
          loginSuccess(res.data.statusCode, res.data.message);
        }
        setTimeout(() => {
          dispatch(loginClear());
        }, 5000);
      })
      .catch((error) => {
        console.log("error :>> ", error);
        dispatch(loginFailure(error));
        setTimeout(() => {
          dispatch(loginClear());
        }, 5000);
      });
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
export const loginSuccess = (statusCode, message) => {
  console.log("data :>> ", message, statusCode);
  return {
    type: ActionType.LOGIN_SUCCESS,
    payload: { statusCode: statusCode, message: message },
  };
};
export const loginFailure = (error) => {
  return {
    type: ActionType.LOGIN_FAILURE,
    payload: error,
  };
};
export const loginClear = () => {
  return {
    type: ActionType.LOGIN_CLEAR,
  };
};
