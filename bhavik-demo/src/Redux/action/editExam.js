import { ActionType } from "./action-type";
import Api from "../../Services/apiInstance";

export const editExamData = (id, data, naviget) => {
  return async (dispatch) => {
    await Api.put("dashboard/Teachers/editExam?id=" + id, data)
      .then((res) => {
        // dispatch(editExamSuccess(res.data.data)),
        console.log("res.data :>> ", res.data);
        dispatch(editExamSuccess(res.data.statusCode, res.data.message));
        naviget("/view-exam");
        setTimeout(() => {
          dispatch(editExamClear());
        }, 5000);
      })
      .catch((error) => {
        dispatch(editExamFailure(error.message));
        console.log("error.message", error.message);
        setTimeout(() => {
          dispatch(editExamClear());
        }, 5000);
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
