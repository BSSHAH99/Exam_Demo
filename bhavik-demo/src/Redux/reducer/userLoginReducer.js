import { ActionType } from "../action/action-type";
import loginFields from "../../Constants/LoginFields";

const user = {};
loginFields.forEach((element) => {
  user[element.name] = "";
});

const initialstate = {
  user: { ...user },
  message: {},
  formerror: {},
};

const userLoginReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ActionType.LOGIN_ON_CHANGE:
      return { ...state, user: { ...state.user, ...action.payload } };

    case ActionType.IS_LOGIN_ERROR:
      return { ...state, formerror: { ...state.formerror, ...action.payload } };

    // case ActionType.IS_VALID_LOGIN:
    //   return { ...state, formerror: { ...state.formerror, ...action.payload } };

    case ActionType.LOGIN_SUCCESS:
      return { ...state, message: { ...state.message, ...action.payload } };

    case ActionType.LOGIN_FAILURE:
      return { ...state, message: { ...state.message, ...action.payload } };

    case ActionType.LOGIN_CLEAR:
      return initialstate;

    default:
      return state;
  }
};

export default userLoginReducer;
