import { ActionType } from "./action-type";
import Api from "../../Services/apiInstance";

export const editExamData = (id, data, naviget) => {
  return async (dispatch) => {
    await Api.put("dashboard/Teachers/editExam?id=" + id, data)
      .then((res) => {
        // dispatch(editExamSuccess(res.data.data)),
        console.log("res.data :>> ", res.data);
        naviget("/view-exam");
      })
      .catch((error) => {
        // dispatch(editExamFailure(error.message)),
        console.log("error.message", error.message);
      });
  };
};
