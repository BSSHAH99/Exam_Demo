import { ActionType } from "./action-type";
import Api from "../../Services/apiInstance";

export const studentProfileRequest = () => {
  return async (dispatch) => {
    await Api.get("/student/getStudentDetail")
      .then((res) => {
        dispatch(studentProfileSuccess(res.data.data));
        console.log("this is res done", res.data);
      })
      .catch((error) => dispatch(studentProfileFailure(error.message)));
  };
};

export const studentProfileSuccess = (users) => {
  return {
    type: ActionType.STUDENT_PROFILE_SUCCESS,
    payload: users,
  };
};

export const studentProfileFailure = (error) => {
  return {
    type: ActionType.STUDENT_PROFILE_FAILURE,
    payload: error,
  };
};
