import { ActionType } from "./action-type";
import Api from "../../Services/apiInstance";

export const ExamDetailRequest = (id) => {
  return async (dispatch) => {
    await Api.get("dashboard/Teachers/examDetail?id=" + id)
      .then((res) => {
        dispatch(ExamDetailSuccess(res.data.data));
      })
      .catch((error) => dispatch(ExamDetailFailure(error.message)));
  };
};

export const ExamDetailSuccess = (users) => {
  return {
    type: ActionType.EXAM_DETAIL_SUCCESS,
    payload: users,
  };
};

export const ExamDetailFailure = (error) => {
  return {
    type: ActionType.EXAM_DETAIL_FAILURE,
    payload: error,
  };
};
