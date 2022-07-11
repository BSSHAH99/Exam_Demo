import { ActionType } from "../action/action-type";
import ResetPasswordFields from "../../Constants/ResetPasswordFields";

const user = {};
ResetPasswordFields.forEach((element) => {
  user[element.name] = "";
});

const initialstate = {
  user: { ...user },
  formerror: {},
  message: "",
};

const resetPasswordReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ActionType.RESET_PASSWORD_ON_CHANGE:
      return { ...state, user: { ...state.user, ...action.payload } };

    case ActionType.IS_RESET_PASSWORD_ERROR:
      return { ...state, formerror: { ...state.formerror, ...action.payload } };

    case ActionType.RESET_PASSWORD_SUCCESS:
      return { ...state, message: action.payload };

    case ActionType.RESET_PASSWORD_FAILURE:
      return { ...state, message: action.payload };

    case ActionType.RESET_PASSWORD_CLEAR:
      return { ...state, user: { ...user } };

    default:
      return state;
  }
};

export default resetPasswordReducer;
