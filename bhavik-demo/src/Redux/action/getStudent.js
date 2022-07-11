import { ActionType } from "./action-type";
import Api from "../../Services/apiInstance";

export const fetchStudentRequest = () => {
  return async (dispatch) => {
    await Api.get("/dashboard/Teachers")
      .then((res) => {
        dispatch(fetchStudentSuccess(res.data.data));
        console.log("this is res done", res.data);
      })
      .catch((error) => dispatch(fetchStudentFailure(error.message)));
  };
};

export const fetchStudentSuccess = (users) => {
  return {
    type: ActionType.FETCH_STUDENT_SUCCESS,
    payload: users,
  };
};

export const fetchStudentFailure = (error) => {
  return {
    type: ActionType.CREATE_EXAM_FAILURE,
    payload: error,
  };
};
