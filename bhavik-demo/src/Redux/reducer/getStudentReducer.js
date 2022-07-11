import { ActionType } from "../action/action-type";
const initialState = {
  loading: true,
  student: [],
  error: "",
};

const getStudentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_STUDENT_SUCCESS:
      return {
        ...state,
        loading: false,
        student: action.payload,
        error: "",
      };
    case ActionType.FETCH_STUDENT_FAILURE:
      return {
        ...state,
        loading: false,
        student: [],
        error: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default getStudentReducer;
