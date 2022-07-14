import validation from "../../Component/validation";
import { ActionType } from "./action-type";
import Api from "../../Services/apiInstance";

export const editStudentProfileOnChange =
  (key, value) => (dispatch, getState) => {
    const state = getState();
    const { user } = state.editStudentProfileReducer;

    const newError = validation(key, value);
    dispatch(iseditStudentProfileError({ [key]: newError }));

    const userData = { ...user, [key]: value };
    dispatch(setStudentProfile(userData));
  };
export const editStudentProfileRequest = (navigate) => {
  return async (dispatch, getState) => {
    const state = getState();
    const userData = state.editStudentProfileReducer.user;
    console.log("this is userData", userData);
    await Api.put("/student/studentProfile", userData)
      .then((res) => {
        // dispatch(editStudentProfileSuccess(res.data.message));
        console.log("res.data.message :>> ", res.data.message);
        navigate("/student-profile");
      })
      .catch((error) => {
        console.log("error.message", error.message);
        dispatch(editStudentProfileFailure(error.message));
      });
  };
};
export const setStudentProfile = (userData) => {
  return { type: ActionType.EDIT_STUDENT_ON_CHANGE, payload: userData };
};

export const setStudentData = (userData) => {
  return { type: ActionType.SET_STUDENT_DATA, payload: userData };
};

export const iseditStudentProfileError = (validat) => {
  return {
    type: ActionType.IS_EDIT_STUDENT_ERROR,
    payload: validat,
  };
};
export const editStudentProfileSuccess = (message) => {
  return {
    type: ActionType.EDIT_STUDENT_SUCCESS,
    payload: message,
  };
};
export const editStudentProfileFailure = (error) => {
  return {
    type: ActionType.EDIT_STUDENT_FAILURE,
    payload: error,
  };
};

export const editStudentProfileClear = (data) => {
  return {
    type: ActionType.EDIT_STUDENT_CLEAR,
    payload: data,
  };
};
