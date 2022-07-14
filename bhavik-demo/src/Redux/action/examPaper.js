import { ActionType } from "./action-type";
import Api from "../../Services/apiInstance";

export const fetchExamPaperRequest = (id) => {
  return async (dispatch) => {
    await Api.get("/student/examPaper?id=" + id)
      .then((res) => {
        dispatch(fetchExamPaperSuccess(res.data.data));
      })
      .catch((error) => dispatch(fetchExamPaperFailure(error.message)));
  };
};

export const fetchExamPaperSuccess = (users) => {
  return {
    type: ActionType.FETCH_EXAM_PAPER_SUCCESS,
    payload: users,
  };
};

export const fetchExamPaperFailure = (error) => {
  return {
    type: ActionType.FETCH_EXAM_PAPER_FAILURE,
    payload: error,
  };
};

export const giveExamRequest = (id, data, navigate) => {
  return async (dispatch) => {
    await Api.post("/student/giveExam?id=" + id, data)
      .then((res) => {
        console.log("res.data", res.data);
        setTimeout(() => {
          navigate("/result?id=" + id);
        }, 3000);
      })
      .catch((error) => console.log("error.message", error.message));
  };
};
