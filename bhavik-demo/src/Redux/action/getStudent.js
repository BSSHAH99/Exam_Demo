import { ActionType } from "./action-type";
import Api from "../../Services/apiInstance";

export const fetchStudentRequest = () => {
  console.log("this is fetchStudfent request :>> ");
  return async (dispatch) => {
    await Api.get("/dashboard/Teachers")
      .then((res) => {
        console.log("this is res done", res.data);
        dispatch(fetchStudentSuccess(res.data.data));
      })
      .catch((error) => {
        console.log("error.message :>> ", error.message);
        dispatch(fetchStudentFailure(error.message));
      });
  };
};

// export const featchUseres = () => {
//   return async (dispatch) => {
//     await axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((res) => dispatch(fetchUsersSuccess(res.data)))
//       .catch((error) => dispatch(fetchUsersFailure(error.message)));
//   };
// };

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
