import { ActionType } from "../action/action-type";
const initialState = {
  loading: true,
  examDetail: [],
  error: "",
};

const examDetailReducer = (state = initialState, action) => {
  switch (action.type) {
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
    default:
      return {
        ...state,
      };
  }
};

export default examDetailReducer;
