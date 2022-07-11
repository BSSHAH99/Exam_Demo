import { ActionType } from "../action/action-type";
const initialState = {
  loading: true,
  student: [],
  message: "",
};

const studentProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.STUDENT_PROFILE_SUCCESS:
      return {
        ...state,
        loading: false,
        student: action.payload,
      };
    case ActionType.STUDENT_PROFILE_FAILURE:
      return {
        ...state,
        loading: false,
        student: [],
        message: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default studentProfileReducer;
