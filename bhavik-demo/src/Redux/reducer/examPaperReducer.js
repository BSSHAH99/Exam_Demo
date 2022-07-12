import { ActionType } from "../action/action-type";
const initialState = {
  loading: true,
  examPaper: [],
  error: "",
};

const examPaperReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_EXAM_PAPER_SUCCESS:
      return {
        ...state,
        loading: false,
        examPaper: action.payload,
        error: "",
      };
    case ActionType.FETCH_EXAM_PAPER_FAILURE:
      return {
        ...state,
        loading: false,
        examPaper: [],
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default examPaperReducer;
