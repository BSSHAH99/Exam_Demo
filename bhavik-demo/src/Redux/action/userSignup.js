import Api from "../../Services/apiInstance";
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

export const signUpRequest = (navigate) => {
  console.log("sigsignUpRequest is calling");
  return async (dispatch, getState) => {
    const state = getState();
    const userData = state.userSignupReducer.user;
    // console.log("this is data of data", userData);
    await Api.post("/users/SignUp", userData)
      .then((res) => {
        console.log("data :>> ", res.data);
        if (res.data.statusCode === 200) {
          navigate("/login");
        }
        dispatch(signUpSuccess(res.data.statusCode, res.data.message));
        setTimeout(() => {
          dispatch(signUpClear());
        }, 5000);
      })
      .catch((error) => {
        console.log("error :>> ", error);
        dispatch(signUpFailure(error));
        setTimeout(() => {
          dispatch(signUpClear());
        }, 5000);
      });
  };
};

export const issignUpError = (validat) => {
  return {
    type: ActionType.IS_SIGN_UP_ERROR,
    payload: validat,
  };
};
export const signUpSuccess = (statusCode, message) => {
  return {
    type: ActionType.SIGN_UP_SUCCESS,
    payload: { statusCode: statusCode, message: message },
  };
};

export const signUpFailure = (error) => {
  return {
    type: ActionType.SIGN_UP_FAILURE,
    payload: error,
  };
};

export const signUpClear = () => {
  return {
    type: ActionType.SIGN_UP_CLEAR,
  };
};
