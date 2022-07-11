import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { studentProfileRequest } from "../Redux/action/studentProfile";
import { isStudent } from "./function";
import DemoButton from "./ReusableComponents/DemoButton";
import DemoTable from "./ReusableComponents/DemoTable";
import Loading from "./ReusableComponents/Loading";

const StudentProfile = () => {
  const navigate = useNavigate();

  const myState = useSelector((state) => state.studentProfileReducer);
  const student = myState.student;

  let tableData = Object.values(student || {});
  const dispatch = useDispatch();

  useEffect(() => {
    isStudent(navigate);
    dispatch(studentProfileRequest());
  }, []);

  const onEdit = (e, index, id) => {
    // console.log("e, index, data._id :>> ", id);
    navigate("/student-profile-edit");
  };
  return (
    <>
      <div className="container my-3">
        <div className="container">
          {myState.loading ? (
            <Loading></Loading>
          ) : (
            <DemoTable tableData={tableData}></DemoTable>
          )}

          <DemoButton onClick={onEdit}>Edit</DemoButton>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
