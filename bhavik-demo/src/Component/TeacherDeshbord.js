import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchStudentRequest } from "../Redux/action/getStudent";
import { isTeacher } from "./function";
import DemoTable from "./ReusableComponents/DemoTable";
import Loading from "./ReusableComponents/Loading";

const TeacherDeshbord = () => {
  const navigate = useNavigate();

  const myState = useSelector((state) => state.getStudentReducer);
  const student = myState.student;

  let tableData = Object.values(student || {});
  const dispatch = useDispatch();

  useEffect(() => {
    isTeacher(navigate);
    dispatch(fetchStudentRequest());
  }, []);

  return (
    <>
      <div className="container my-3">
        <div className="container">
          {myState.loading ? (
            <Loading></Loading>
          ) : (
            <DemoTable tableData={tableData}></DemoTable>
          )}
        </div>
      </div>
    </>
  );
};

export default TeacherDeshbord;
