import { Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import LoginFields from "../../Constants/LoginFields";
import DemoButton from "../ReusableComponents/DemoButton";
import DemoInput from "../ReusableComponents/DemoInput";
import {
  isLoginError,
  loginOnChange,
  loginRequest,
} from "../../Redux/action/userLogin";
import { useDispatch, useSelector } from "react-redux";
import Alert from "../ReusableComponents/Alert";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { isLogin } from "../function";
import OneLink from "../ReusableComponents/OneLink";
import validation from "../validation";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const myState = useSelector((state) => state.userLoginReducer);
  const userData = myState.user;
  const formerror = myState.formerror;
  const message = myState.message;
  console.log("message.statescode :>> ", message.statusCode);

  useEffect(() => {
    isLogin(navigate);
  }, [dispatch]);

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
  console.log("composnest render :>> ");
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
          {Object.keys(message).length === 0
            ? null
            : message.statusCode === 200
            ? toast.success(message.message)
            : toast.error(message.message)}
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
