import { ActionType } from "../action/action-type";
import ForgotPasswordFields from "../../Constants/ForgotPasswordFields";

const user = {};
ForgotPasswordFields.forEach((element) => {
  user[element.name] = "";
});

const initialstate = {
  user: { ...user },
  formerror: {},
  message: {},
};

const forgotPasswordReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ActionType.FORGOT_PASSWORD_ON_CHANGE:
      return { ...state, user: { ...state.user, ...action.payload } };

    case ActionType.IS_FORGOT_PASSWORD_ERROR:
      return { ...state, formerror: { ...state.formerror, ...action.payload } };

    case ActionType.FORGOT_PASSWORD_SUCCESS:
      return { ...state, message: { ...state.message, ...action.payload } };

    case ActionType.FORGOT_PASSWORD_FAILURE:
      return { ...state, message: { ...state.message, ...action.payload } };

    case ActionType.FORGOT_PASSWORD_CLEAR:
      return initialstate;

    default:
      return state;
  }
};

export default forgotPasswordReducer;
