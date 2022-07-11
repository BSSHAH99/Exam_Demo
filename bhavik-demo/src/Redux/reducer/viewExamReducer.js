import { ActionType } from "../action/action-type";
const initialState = {
  loading: true,
  exam: [],
  message: "",
};

const viewExamReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_VIEW_EXAM_SUCCESS:
      return {
        ...state,
        loading: false,
        exam: action.payload,
        message: "",
      };
    case ActionType.VIEW_EXAM_FAILURE:
      return {
        ...state,
        loading: false,
        exam: [],
        message: action.payload,
      };
    case ActionType.DELETE_EXAM_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case ActionType.DELETE_EXAM_FAILURE:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default viewExamReducer;
