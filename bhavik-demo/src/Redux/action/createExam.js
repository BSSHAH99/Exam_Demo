import validation from "../../Component/validation";
import Api from "../../Services/apiInstance";

import { ActionType } from "./action-type";

// export const createExamOnChange = (key, value) => (dispatch, getState) => {
//   const state = getState();
//   const { examData } = state.createExamReducer;

//   const newError = validation(key, value);
//   dispatch(createExamError({ [key]: newError }));

//   const userData = { examData, [key]: value };
//   console.log("userData :>> ", userData);
//   dispatch({ type: ActionType.CREATE_EXAM_ON_CHANGE, payload: userData });
// };

// export const createExamData = (data) => {
//   return {
//     type: ActionType.CREATE_EXAM_DATA,
//     payload: data,
//   };
// };

export const createExaminitialstate = () => {
  return {
    type: ActionType.CREATE_EXAM_INITIAL,
  };
};

export const createExamRequest = (initialData, navigate) => {
  console.log("sigsignUpRequest is calling");
  return async (dispatch) => {
    await Api.post("/dashboard/Teachers/Exam", initialData)
      .then((res) => {
        dispatch(createExamSuccess(res.data.message));
        navigate("/view-exam");
      })
      .catch((error) => dispatch(createExamFailure(error.message)));
  };
};

export const createExamSuccess = (data) => {
  return {
    type: ActionType.CREATE_EXAM_SUCCESS,
    payload: data,
  };
};

export const createExamError = (validat) => {
  return {
    type: ActionType.IS_CREATE_EXAM_ERROR,
    payload: validat,
  };
};

export const createExamFailure = (error) => {
  return {
    type: ActionType.CREATE_EXAM_FAILURE,
    payload: error,
  };
};

export const createExamClear = (data) => {
  return {
    type: ActionType.SIGN_UP_CLEAR,
    payload: data,
  };
};
