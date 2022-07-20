import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import forgotPasswordFields from "../../Constants/ForgotPasswordFields";
import {
  forgotPasswordOnChange,
  forgotPasswordRequest,
  isForgotPasswordError,
} from "../../Redux/action/forgotPassword";
import { isLogin } from "../function";
import Alert from "../ReusableComponents/Alert";
import DemoButton from "../ReusableComponents/DemoButton";
import DemoInput from "../ReusableComponents/DemoInput";
import OneLink from "../ReusableComponents/OneLink";
import validation from "../validation";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    isLogin(navigate);
  }, []);

  const myState = useSelector((state) => state.forgotPasswordReducer);
  const message = myState.message;
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
      dispatch(isForgotPasswordError(error));
      return;
    }
    dispatch(forgotPasswordRequest(navigate));
  };

  const handleChange = (e) => {
    dispatch(forgotPasswordOnChange(e.target.name, e.target.value));
  };

  return (
    <>
      <div>
        <Helmet>
          <title>Password</title>
          <meta name="from" content="Password from" />
          <meta name="keywords" content="Password" />
        </Helmet>
      </div>

      <div className="container my-3">
        <div className="container">
          {Object.keys(message).length === 0
            ? null
            : message.statusCode === 200
            ? toast.success(message.message)
            : toast.error(message.message)}
          <form onSubmit={handalSubmit}>
            {forgotPasswordFields.map((input, index) => {
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

export default ForgotPassword;
