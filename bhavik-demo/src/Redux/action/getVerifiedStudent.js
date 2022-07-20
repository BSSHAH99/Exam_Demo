import { ActionType } from "./action-type";
import Api from "../../Services/apiInstance";

export const fetchVerifiedStudentRequest = () => {
  return async (dispatch) => {
    await Api.get("/dashboard/Teachers/StudentForExam")
      .then((res) => {
        console.log("res.data.data :>> ", res.data.data);
        dispatch(fetchVerifiedStudentSuccess(res.data.data));
      })
      .catch((error) => dispatch(fetchVerifiedStudentFailure(error.message)));
  };
};

export const fetchVerifiedStudentSuccess = (users) => {
  return {
    type: ActionType.FETCH_VERIFIED_STUDENT_SUCCESS,
    payload: users,
  };
};

export const fetchVerifiedStudentFailure = (error) => {
  return {
    type: ActionType.FETCH_VERIFIED_STUDENT_FAILURE,
    payload: error,
  };
};
