import { ActionType } from "../action/action-type";
import SignupFields from "../../Constants/SignupFields";

const user = {};
SignupFields.forEach((element) => {
  user[element.name] = "";
});
const initialstate = {
  user: { ...user },
  message: {},
  formerror: {},
};

const userSignupReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ActionType.SIGN_UP_ON_CHANGE:
      return { ...state, user: action.payload };

    case ActionType.IS_SIGN_UP_ERROR:
      return { ...state, formerror: { ...state.formerror, ...action.payload } };

    case ActionType.SIGN_UP_SUCCESS:
      return { ...state, message: { ...state.message, ...action.payload } };

    case ActionType.SIGN_UP_FAILURE:
      return { ...state, message: { ...state.message, ...action.payload } };

    case ActionType.SIGN_UP_CLEAR:
      return initialstate;

    default:
      return state;
  }
};

export default userSignupReducer;
