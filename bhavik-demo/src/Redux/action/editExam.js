import { ActionType } from "./action-type";
import Api from "../../Services/apiInstance";
import { toastSuccess, toastFailure } from "../action/toastAction";

export const editExamData = (id, data, naviget) => {
  return async (dispatch) => {
    await Api.put("dashboard/Teachers/editExam?id=" + id, data)
      .then((res) => {
        // dispatch(editExamSuccess(res.data.data)),
        console.log("res.data :>> ", res.data);
        dispatch(toastSuccess(res.data.statusCode, res.data.message));
        naviget("/view-exam");
        dispatch(editExamClear());
      })
      .catch((error) => {
        dispatch(toastFailure(error));
        dispatch(editExamClear());
      });
  };
};

export const editExamSuccess = (statusCode, message) => {
  return {
    type: ActionType.CREATE_EXAM_SUCCESS,
    payload: { statusCode: statusCode, message: message },
  };
};

export const editExamFailure = (message) => {
  return {
    type: ActionType.CREATE_EXAM_FAILURE,
    payload: { message: message },
  };
};

export const editExamClear = () => {
  return {
    type: ActionType.CREATE_EXAM_CLEAR,
  };
};
