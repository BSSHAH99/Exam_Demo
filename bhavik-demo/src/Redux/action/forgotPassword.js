import Api from "../../Services/apiInstance";
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
    await Api.post("/users/ForgotPassword", userData)
      .then((res) => {
        if (res.data.statusCode === 200) {
          navigate("/login");
        }
        dispatch(forgotPasswordSuccess(res.data.statusCode, res.data.message));
        setTimeout(() => {
          dispatch(forgotPasswordClear());
        }, 5000);
      })
      .catch((error) => {
        dispatch(forgotPasswordFailure(error));

        setTimeout(() => {
          dispatch(forgotPasswordClear());
        }, 5000);
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
