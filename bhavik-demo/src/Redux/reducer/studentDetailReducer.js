import { ActionType } from "../action/action-type";
const initialState = {
  loading: true,
  studentDetail: [],
  error: "",
};

const studentDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_STUDENT_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        studentDetail: action.payload,
        error: "",
      };
    case ActionType.FETCH_STUDENT_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        studentDetail: [],
        error: action.payload,
      };
    case ActionType.STUDENT_DETAIL_RESET:
      return {
        ...state,
        loading: true,
        studentDetail: [],
      };
    default:
      return {
        ...state,
      };
  }
};

export default studentDetailReducer;
