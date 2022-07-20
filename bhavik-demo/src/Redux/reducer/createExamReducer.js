import { ActionType } from "../action/action-type";

const initialstate = {
  formValues: {},
  examData: {},
  formerror: {},
  message: {},
};

const createExamReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ActionType.CREATE_EXAM_INITIAL:
      return { initialstate };

    case ActionType.CREATE_EXAM_DATA:
      return { ...state, examData: action.payload };

    case ActionType.CREATE_EXAM_ON_CHANGE:
      return { ...state, examData: action.payload };

    case ActionType.IS_CREATE_EXAM_ERROR:
      return { ...state, formerror: { ...state.formerror, ...action.payload } };

    case ActionType.CREATE_EXAM_SUCCESS:
      return { ...state, message: { ...state.message, ...action.payload } };

    case ActionType.CREATE_EXAM_FAILURE:
      return { ...state, message: { ...state.message, ...action.payload } };

    case ActionType.CREATE_EXAM_CLEAR:
      return initialstate;

    default:
      return state;
  }
};

export default createExamReducer;
