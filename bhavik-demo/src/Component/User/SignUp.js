import React, { useEffect } from "react";

import DemoInput from "../ReusableComponents/DemoInput";
import DemoRadioInput from "../ReusableComponents/DemoRadioInput";
import DemoButton from "../ReusableComponents/DemoButton";
import signupFields from "../../Constants/SignupFields";
import { useDispatch, useSelector } from "react-redux";
import {
  issignUpError,
  signUpOnChange,
  signUpRequest,
} from "../../Redux/action/userSignup";
import Alert from "../ReusableComponents/Alert";
import OneLink from "../ReusableComponents/OneLink";
import { isLogin } from "../function";
import { useNavigate } from "react-router-dom";
import validation from "../validation";
import { toast } from "react-toastify";

const SignUp = () => {
  const myState = useSelector((state) => state.userSignupReducer);
  const message = myState.message;
  const userData = myState.user;
  const formerror = myState.formerror;

  const naviget = useNavigate();

  useEffect(() => {
    isLogin(naviget);
  }, []);

  const dispatch = useDispatch();

  const handalSubmit = (e) => {
    let error = {};
    e.preventDefault();
    Object.entries(userData).forEach(([key, value]) => {
      const newError = validation(key, value);
      if (newError) error[key] = newError;
    });
    if (Object.entries(error).length) {
      dispatch(issignUpError(error));
      return;
    }
    dispatch(signUpRequest(naviget));
  };

  const handleChange = (e) => {
    dispatch(signUpOnChange(e.target.name, e.target.value));
  };

  return (
    <React.Fragment>
      <div className="container my-3">
        <div className="container">
          <form onSubmit={handalSubmit}>
            {signupFields.map((input, index) => {
              switch (input.type) {
                case "radio":
                  return (
                    <DemoRadioInput
                      key={index}
                      {...input}
                      value={userData[input.name]}
                      onChange={handleChange}
                      checked={input?.label === userData[input.name] || ""}
                      error={formerror || ""}
                    ></DemoRadioInput>
                  );
                default:
                  return (
                    <DemoInput
                      key={index}
                      {...input}
                      value={userData[input.name] || ""}
                      onChange={handleChange}
                      error={formerror || ""}
                    />
                  );
              }
            })}
            <div className="my-3 mx-3">
              <DemoButton type={"submit"}>SignUp</DemoButton>
            </div>
          </form>
        </div>

        <div className="my-3 mx-3">
          <OneLink to={"/login"}>Login</OneLink>
        </div>
      </div>
    </React.Fragment>
  );
};

// <TestTable
// tableData={data}
// btnEdit={"Edit"}
// btnDelete={"Delete"}
// onDelete={onDelete}
// onEdit={onEdit}
// />
export default SignUp;
