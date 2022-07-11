import { ActionType } from "./action-type";
import Api from "../../Services/apiInstance";

export const allExamStudentRequest = () => {
  return async (dispatch) => {
    await Api.get("/student/studentExam")
      .then((res) => {
        dispatch(allExamStudentSuccess(res.data.data));
        console.log("this is res done", res.data);
      })
      .catch((error) => dispatch(allExamStudentFailure(error.message)));
  };
};

export const allExamStudentSuccess = (users) => {
  return {
    type: ActionType.ALL_EXAM_STUDENT_SUCCESS,
    payload: users,
  };
};

export const allExamStudentFailure = (error) => {
  return {
    type: ActionType.ALL_EXAM_STUDENT_FAILURE,
    payload: error,
  };
};
