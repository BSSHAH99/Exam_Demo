import { ActionType } from "./action-type";
import Api from "../../Services/apiInstance";

export const ExamDetailRequest = (id) => {
  return async (dispatch) => {
    dispatch(setLoadingData(true));
    await Api.get("dashboard/Teachers/examDetail?id=" + id)
      .then((res) => {
        dispatch(ExamDetailSuccess(res.data.data));
        // dispatch(setLoadingData(false));
      })
      .catch((error) => dispatch(ExamDetailFailure(error.message)));
  };
};

export const setLoadingData = (flag) => {
  return {
    type: ActionType.SET_LOADING,
    payload: flag,
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

export const ExamDetailClear = () => {
  return {
    type: ActionType.EXAM_DETAIL_CLEAR,
  };
};
