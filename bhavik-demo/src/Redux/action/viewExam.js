import { ActionType } from "./action-type";
import Api from "../../Services/apiInstance";

export const ViewExamRequest = () => {
  return async (dispatch) => {
    await Api.get("/dashboard/Teachers/viewExam")
      .then((res) => {
        dispatch(ViewExamSuccess(res.data.data));
        console.log("this is res done", res.data);
      })
      .catch((error) => dispatch(ViewExamFailure(error.message)));
  };
};

export const ViewExamSuccess = (users) => {
  return {
    type: ActionType.FETCH_VIEW_EXAM_SUCCESS,
    payload: users,
  };
};

export const ViewExamFailure = (error) => {
  return {
    type: ActionType.VIEW_EXAM_FAILURE,
    payload: error,
  };
};

export const deleteExamRequest = (id, navigate) => {
  return async (dispatch) => {
    await Api.delete("dashboard/Teachers/deleteExam?id=" + id)
      .then((res) => {
        dispatch(deleteExamSuccess(res.data.data.message));
        navigate("/view-exam");
        console.log("this is res done", res);
      })
      .catch((error) => {
        dispatch(deleteExamFailure(error.message));
      });
  };
};

export const deleteExamSuccess = (message) => {
  return {
    type: ActionType.DELETE_EXAM_SUCCESS,
    payload: message,
  };
};

export const deleteExamFailure = (error) => {
  return {
    type: ActionType.DELETE_EXAM_FAILURE,
    payload: error,
  };
};
