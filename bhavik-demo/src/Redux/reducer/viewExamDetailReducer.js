import { ActionType } from "../action/action-type";
const initialState = {
  loading: false,
  examDetail: [],
  error: "",
};

const examDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case ActionType.EXAM_DETAIL_SUCCESS:
      return {
        ...state,
        loading: false,
        examDetail: action.payload,
        error: "",
      };
    case ActionType.EXAM_DETAIL_FAILURE:
      return {
        ...state,
        loading: false,
        examDetail: [],
        error: action.payload,
      };

    case ActionType.EXAM_DETAIL_CLEAR:
      return initialState;
    default:
      return {
        ...state,
      };
  }
};

export default examDetailReducer;
