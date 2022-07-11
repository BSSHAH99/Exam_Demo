import { ActionType } from "../action/action-type";
import NewPasswordFields from "../../Constants/NewPasswordFields";

const user = {};
NewPasswordFields.forEach((element) => {
  user[element.name] = "";
});

const initialstate = {
  user: { ...user },
  message: "",
  formerror: {},
};

const newPasswordReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ActionType.NEW_PASSWORD_ON_CHANGE:
      return { ...state, user: { ...state.user, ...action.payload } };

    case ActionType.IS_NEW_PASSWORD_ERROR:
      return { ...state, formerror: { ...state.formerror, ...action.payload } };

    case ActionType.NEW_PASSWORD_SUCCESS:
      return { ...state, message: action.payload };

    case ActionType.NEW_PASSWORD_FAILURE:
      return { ...state, message: action.payload };

    case ActionType.NEW_PASSWORD_CLEAR:
      return { ...state, user: { ...user } };

    default:
      return state;
  }
};

export default newPasswordReducer;
