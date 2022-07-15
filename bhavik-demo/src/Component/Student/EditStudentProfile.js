import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { studentProfileRequest } from "../../Redux/action/studentProfile";
import { isLogin, isStudent } from "../function";
import EditStudentProfileFields from "../../Constants/EditStudentProfileFields";
import DemoButton from "../ReusableComponents/DemoButton";
import validation from "../validation";
import DemoInput from "../ReusableComponents/DemoInput";
import {
  editStudentProfileOnChange,
  editStudentProfileRequest,
  iseditStudentProfileError,
  setStudentProfile,
} from "../../Redux/action/editStudentProfile";
import Alert from "../ReusableComponents/Alert";

const EditStudentProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const studentProfileState = useSelector(
    (state) => state.studentProfileReducer
  );
  const student = studentProfileState.student;

  useEffect(() => {
    isStudent(navigate);
  }, []);

  let myState = useSelector((state) => state.editStudentProfileReducer);
  const userData = myState.user;
  const formerror = myState.formerror;

  const handalSubmit = (e) => {
    e.preventDefault();

    let error = {};
    Object.entries(userData).forEach(([key, value]) => {
      const newError = validation(key, value);
      if (newError) error[key] = newError;
    });
    if (Object.entries(error).length) {
      dispatch(iseditStudentProfileError(error));
      return;
    }
    dispatch(editStudentProfileRequest(navigate));
  };

  const handleChange = (e) => {
    dispatch(editStudentProfileOnChange(e.target.name, e.target.value));
  };

  // console.log("student :>> ", student);
  // console.log("userData :>> ", userData);

  return (
    <div className="container my-3">
      <div className="container">
        {!myState.message ? null : (
          <Alert className={"alert alert-danger"}>{myState.message}</Alert>
        )}
        <form onSubmit={handalSubmit}>
          {EditStudentProfileFields.map((input, index) => {
            return (
              <DemoInput
                key={index}
                {...input}
                value={userData[input.name] || ""}
                onChange={handleChange}
                error={formerror || ""}
              />
            );
          })}
          <DemoButton type={"submit"}>Update</DemoButton>
        </form>
      </div>
    </div>
  );
};

export default EditStudentProfile;
