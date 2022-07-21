import validation from "../../Component/validation";
import { ActionType } from "./action-type";
import axios from "axios";
import { toastSuccess, toastFailure } from "../action/toastAction";

export const newPasswor = {};

export const newPasswordOnChange = (key, value) => (dispatch, getState) => {
  const state = getState();
  const userData = state.newPasswordReducer.user;
  const { user } = state.newPasswordReducer;

  const newError = validation(key, value, userData);
  dispatch(isNewPassworError({ [key]: newError }));

  const Data = { ...user, [key]: value };
  dispatch({ type: ActionType.NEW_PASSWORD_ON_CHANGE, payload: Data });
};

export const newPasswordTokenCheck = (token, navigate) => {
  console.log("newPasswordTokenCheck is caling :>> ");
  return async (dispatch) => {
    // await Api.post("/users/newPassword")
    await axios
      .get(`${process.env.REACT_APP_API_DOMAIN}/users/newPassword`, {
        headers: { "access-token": token },
      })
      .then((res) => {
        dispatch(toastSuccess(res.data.statusCode, res.data.message));
        console.log("res.data :>> ", res.data);
        if (res.data.statusCode === 200) {
          dispatch(newPasswordRequest(token, navigate));
        } else {
          navigate("/ForgotPassword");
        }
        dispatch(newPasswordClear());
      })
      .catch((error) => {
        dispatch(toastFailure(error));
        dispatch(newPasswordClear());
      });
  };
};

export const newPasswordRequest = (token, navigate) => {
  console.log("newPasswordRequest caling :>> ");
  return async (dispatch, getState) => {
    const state = getState();
    const userData = state.newPasswordReducer.user;
    // await Api.post(`/users/ForgotPassword/Verify?token=${token}`, userData)
    await axios
      .post(
        `${process.env.REACT_APP_API_DOMAIN}/users/ForgotPassword/Verify?token=${token}`,
        userData
      )
      .then((res) => {
        console.log("res.data :>> ", res.data);
        if (res.data.statusCode === 200) {
          navigate("/login");
        }
        dispatch(newPasswordSuccess(res.data.statusCode, res.data.message));

        setTimeout(() => {
          dispatch(newPasswordClear());
        }, 5000);
      })
      .catch((error) => {
        dispatch(newPasswordFailure(error.message));
        setTimeout(() => {
          dispatch(newPasswordClear());
        }, 5000);
      });
  };
};

export const isNewPassworError = (validat) => {
  return {
    type: ActionType.IS_NEW_PASSWORD_ERROR,
    payload: validat,
  };
};
export const newPasswordSuccess = (statusCode, message) => {
  return {
    type: ActionType.NEW_PASSWORD_SUCCESS,
    payload: { statusCode: statusCode, message: message },
  };
};
export const newPasswordFailure = (error) => {
  console.log("error :>> ", error);
  return {
    type: ActionType.NEW_PASSWORD_FAILURE,
    payload: error,
  };
};

export const newPasswordClear = () => {
  return {
    type: ActionType.NEW_PASSWORD_CLEAR,
  };
};
