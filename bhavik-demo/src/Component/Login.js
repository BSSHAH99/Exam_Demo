import { Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import LoginFields from "../Constants/LoginFields";
import DemoButton from "./ReusableComponents/DemoButton";
import DemoInput from "./ReusableComponents/DemoInput";
import {
  isLoginError,
  loginOnChange,
  loginRequest,
} from "../Redux/action/userLogin";
import { useDispatch, useSelector } from "react-redux";
import Alert from "./ReusableComponents/Alert";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { isLogin } from "./function";
import OneLink from "./ReusableComponents/OneLink";
import validation from "./validation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    isLogin(navigate);
  }, []);

  const myState = useSelector((state) => state.userLoginReducer);
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
      dispatch(isLoginError(error));
      return;
    }
    dispatch(loginRequest(navigate));
  };

  const handleChange = (e) => {
    dispatch(loginOnChange(e.target.name, e.target.value));
  };

  return (
    <>
      <div>
        <Helmet>
          <title>Login</title>
          <meta name="from" content="Login from" />
          <meta name="keywords" content="Login" />
        </Helmet>
      </div>

      <div className="container my-3">
        <div className="container">
          {!myState.message ? null : (
            <Alert className={"alert alert-danger"}>{myState.message}</Alert>
          )}
          <form onSubmit={handalSubmit}>
            {LoginFields.map((input, index) => {
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
            <DemoButton type={"submit"}>Login</DemoButton>
          </form>
        </div>
        <div className="my-3 mx-3">
          <OneLink to={"/ForgotPassword"}>Forgot Password</OneLink>
        </div>

        <div className="my-3 mx-3">
          <OneLink to={"/signup"}>SignUp</OneLink>
        </div>
      </div>
    </>
  );
};

export default Login;

// const forerror = {}

// formerror.map((items) => {
//     Validite()
//     forerror[email] = "Req"
// })
