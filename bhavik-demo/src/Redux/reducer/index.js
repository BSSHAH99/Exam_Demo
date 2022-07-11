import { combineReducers } from "redux";
import userSignupReducer from "../reducer/userSignupReducer";
import userLoginReducer from "../reducer/userLoginReducer";
import getStudentReducer from "../reducer/getStudentReducer";
import forgotPasswordReducer from "../reducer/forgotPasswordReducer";
import newPasswordReducer from "../reducer/newPasswordReducer";
import resetPasswordReducer from "../reducer/resetPasswordReducer";
import verifiedStudentReducer from "../reducer/verifiedStudentReducer";
import studentDetailReducer from "../reducer/studentDetailReducer";
import createExamReducer from "../reducer/createExamReducer";
import viewExamReducer from "../reducer/viewExamReducer";
import examDetailReducer from "../reducer/viewExamDetailReducer";
import allExamStudentReducer from "../reducer/allExamStudentReducer";
import studentProfileReducer from "../reducer/studentProfileReducer";
import editStudentProfileReducer from "../reducer/editStudentProfileReducer";

const rootReducer = combineReducers({
  userSignupReducer: userSignupReducer,
  userLoginReducer: userLoginReducer,
  getStudentReducer: getStudentReducer,
  forgotPasswordReducer: forgotPasswordReducer,
  newPasswordReducer: newPasswordReducer,
  resetPasswordReducer: resetPasswordReducer,
  verifiedStudentReducer: verifiedStudentReducer,
  studentDetailReducer: studentDetailReducer,
  createExamReducer: createExamReducer,
  viewExamReducer: viewExamReducer,
  examDetailReducer: examDetailReducer,
  allExamStudentReducer: allExamStudentReducer,
  studentProfileReducer: studentProfileReducer,
  editStudentProfileReducer: editStudentProfileReducer,
});

export default rootReducer;
