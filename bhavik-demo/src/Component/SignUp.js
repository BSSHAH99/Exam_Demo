import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import DemoInput from "./ReusableComponents/DemoInput";
import DemoRadioInput from "./ReusableComponents/DemoRadioInput";
import DemoButton from "./ReusableComponents/DemoButton";
import signupFields from "../Constants/SignupFields";
import { useDispatch, useSelector } from "react-redux";
import {
  issignUpError,
  signUpOnChange,
  signUpRequest,
} from "../Redux/action/userSignup";
import Alert from "./ReusableComponents/Alert";
import OneLink from "./ReusableComponents/OneLink";
import { isLogin } from "./function";
import { useNavigate } from "react-router-dom";
import validation from "./validation";

const SignUp = () => {
  const myState = useSelector((state) => state.userSignupReducer);
  const userData = myState.user;
  const formerror = myState.formerror;

  const naviget = useNavigate();

  useEffect(() => {
    isLogin(naviget);
  }, []);

  const dispatch = useDispatch();

  const handalSubmit = (e) => {
    // console.log("handal submit is calling");
    // e.preventDefault();
    // dispatch(signUpRequest());

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
    // console.log("e.target.value :>> ", e.target.value);
    dispatch(signUpOnChange(e.target.name, e.target.value));
  };

  return (
    <React.Fragment>
      <div>
        <Helmet>
          <title>SignUp</title>
          <meta name="from" content="Registration from" />
          <meta name="keywords" content="Registration" />
        </Helmet>
      </div>

      <div className="container my-3">
        <div className="container">
          {!myState.message ? null : (
            <Alert className={"alert alert-danger"}>{myState.message}</Alert>
          )}

          {/* <form onSubmit={handalSubmit}>
            {signupFields.map((input, index) => {
              return (
                <DemoInput
                  key={index}
                  {...input}
                  value={userData[input.name] || ""}
                  onChange={handleChange}
                />
              );
            })}
            <DemoButton type={"submit"}>Login</DemoButton>
          </form> */}
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
