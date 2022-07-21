import { ActionType } from "../action/action-type";

const initialstate = {
  message: {},
};

const toastReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ActionType.TOAST_SUCCESS:
      return { ...state, message: { ...state.message, ...action.payload } };

    case ActionType.TOAST_FAILURE:
      return { ...state, message: { ...state.message, ...action.payload } };

    case ActionType.TOAST_CLEAR:
      return initialstate;

    default:
      return state;
  }
};

export default toastReducer;
