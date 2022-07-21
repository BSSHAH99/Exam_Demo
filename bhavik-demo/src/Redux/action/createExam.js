import validation from "../../Component/validation";
import Api from "../../Services/apiInstance";
import { toastSuccess, toastFailure } from "../action/toastAction";

import { ActionType } from "./action-type";

export const createExaminitialstate = () => {
  return {
    type: ActionType.CREATE_EXAM_INITIAL,
  };
};

export const createExamRequest = (initialData, navigate) => {
  console.log("sigsignUpRequest is calling");
  return async (dispatch) => {
    await Api.post("dashboard/Teachers/Exam", initialData)
      .then((res) => {
        dispatch(toastSuccess(res.data.statusCode, res.data.message));
        navigate("/view-exam");
        dispatch(createExamClear());
      })
      .catch((error) => {
        dispatch(toastFailure(error));
        dispatch(createExamClear());
      });
  };
};

export const createExamSuccess = (statusCode, message) => {
  return {
    type: ActionType.CREATE_EXAM_SUCCESS,
    payload: { statusCode: statusCode, message: message },
  };
};

export const createExamError = (validat) => {
  return {
    type: ActionType.IS_CREATE_EXAM_ERROR,
    payload: validat,
  };
};

export const createExamFailure = (message) => {
  return {
    type: ActionType.CREATE_EXAM_FAILURE,
    payload: { message: message },
  };
};

export const createExamClear = () => {
  return {
    type: ActionType.CREATE_EXAM_CLEAR,
  };
};
