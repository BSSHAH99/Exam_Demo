import { ActionType } from "../action/action-type";
import EditStudentProfileFields from "../../Constants/EditStudentProfileFields";

const user = {};
EditStudentProfileFields.forEach((element) => {
  user[element.name] = "";
});

const initialstate = {
  user: {},
  formerror: {},
  message: "",
};

const editStudentProfileReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ActionType.EDIT_STUDENT_ON_CHANGE:
      return { ...state, user: { ...state.user, ...action.payload } };

    case ActionType.SET_STUDENT_DATA:
      return { ...state, user: action.payload };

    case ActionType.IS_EDIT_STUDENT_ERROR:
      return { ...state, formerror: { ...state.formerror, ...action.payload } };

    case ActionType.EDIT_STUDENT_SUCCESS:
      return { ...state, message: action.payload };

    case ActionType.EDIT_STUDENT_FAILURE:
      return { ...state, message: action.payload };

    case ActionType.EDIT_STUDENT_CLEAR:
      return { ...state, user: { ...user } };

    default:
      return state;
  }
};

export default editStudentProfileReducer;
