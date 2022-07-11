import { ActionType } from "./action-type";
import Api from "../../Services/apiInstance";

export const editExamData = (id, data) => {
  return async (dispatch) => {
    await Api.put("dashboard/Teachers/editExam?id=" + id, data)
      .then((res) => {
        // dispatch(editExamSuccess(res.data.data)),
        console.log("res.data :>> ", res.data);
      })
      .catch((error) => {
        // dispatch(editExamFailure(error.message)),
        console.log("error.message", error.message);
      });
  };
};

// export const editExamFailure = (error) => {
//   return {
//     type: ActionType.CREATE_EXAM_FAILURE,
//     payload: error,
//   };
// };

// export const editExamSuccess = (data) => {
//   return {
//     type: ActionType.CREATE_EXAM_FAILURE,
//     payload: error,
//   };
// };

// export const editExamClear = (data) => {
//   return {
//     type: ActionType.SIGN_UP_CLEAR,
//     payload: data,
//   };
// };
