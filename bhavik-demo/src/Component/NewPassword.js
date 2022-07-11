import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import newPasswordFields from "../Constants/NewPasswordFields";
import {
  isNewPassworError,
  newPasswordOnChange,
  newPasswordTokenCheck,
} from "../Redux/action/newPassword";
import { isLogin } from "./function";
import Alert from "./ReusableComponents/Alert";
import DemoButton from "./ReusableComponents/DemoButton";
import DemoInput from "./ReusableComponents/DemoInput";
import OneLink from "./ReusableComponents/OneLink";
import validation from "./validation";

const NewPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const search = useLocation().search;
  const token = new URLSearchParams(search).get("token");

  useEffect(() => {
    isLogin(navigate);
  }, []);

  const myState = useSelector((state) => state.newPasswordReducer);
  const userData = myState.user;
  const formerror = myState.formerror;
  // console.log("userData :>> ", userData);

  const handalSubmit = (e) => {
    e.preventDefault();

    let error = {};
    Object.entries(userData).forEach(([key, value]) => {
      const newError = validation(key, value, userData);
      if (newError) error[key] = newError;
    });
    if (Object.entries(error).length) {
      dispatch(isNewPassworError(error));
      return;
    }
    dispatch(newPasswordTokenCheck(token));
  };

  const handleChange = (e) => {
    dispatch(newPasswordOnChange(e.target.name, e.target.value));
  };

  return (
    <>
      <div>
        <Helmet>
          <title>New Password</title>
          <meta name="from" content="New Password from" />
          <meta name="keywords" content="New Password" />
        </Helmet>
      </div>

      <div className="container my-3">
        <div className="container">
          {!myState.message ? null : (
            <Alert className={"alert alert-danger"}>{myState.message}</Alert>
          )}
          <form onSubmit={handalSubmit}>
            {newPasswordFields.map((input, index) => {
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

            <div className="my-3 mx-3">
              <OneLink to={"/login"}>Login</OneLink>
            </div>
            <DemoButton type={"submit"}>Submit</DemoButton>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewPassword;
