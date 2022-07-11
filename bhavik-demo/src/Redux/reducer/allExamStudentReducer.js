import { ActionType } from "../action/action-type";
const initialState = {
  loading: true,
  exam: [],
  message: "",
};

const allExamStudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ALL_EXAM_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        exam: action.payload,
      };
    case ActionType.ALL_EXAM_STUDENT_FAILURE:
      return {
        ...state,
        loading: false,
        exam: [],
        message: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default allExamStudentReducer;
