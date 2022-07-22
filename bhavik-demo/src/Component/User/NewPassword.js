import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import newPasswordFields from "../../Constants/NewPasswordFields";
import {
  isNewPassworError,
  newPasswordOnChange,
  newPasswordTokenCheck,
} from "../../Redux/action/newPassword";
import { isLogin } from "../../Utils/function";
import Alert from "../ReusableComponents/Alert";
import DemoButton from "../ReusableComponents/DemoButton";
import DemoInput from "../ReusableComponents/DemoInput";
import OneLink from "../ReusableComponents/OneLink";
import validation from "../validation";
import { toast } from "react-toastify";

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
  const message = myState.message;

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
    console.log(" :>> ");
    dispatch(newPasswordTokenCheck(token, navigate));
  };

  const handleChange = (e) => {
    dispatch(newPasswordOnChange(e.target.name, e.target.value));
  };

  return (
    <>
      <div className="container my-3">
        <div className="container">
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
            <DemoButton type={"submit"}>Submit</DemoButton>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewPassword;
