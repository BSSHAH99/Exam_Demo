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
import { isLogin } from "../../Utils/function";
import OneLink from "../ReusableComponents/OneLink";
import validation from "../validation";
import { singInWithGoogle } from "../../ Firebase";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const myState = useSelector((state) => state.userLoginReducer);
  const userData = myState.user;
  const formerror = myState.formerror;
  const message = myState.message;

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

  return (
    <>
      <div className="container my-3">
        <div className="container">
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
            {/* <DemoButton
              type={"submit"}
              onClick={singInWithGoogle}
              className={"login-with-google-btn"}
            >
              Sing In With Google
            </DemoButton> */}
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
