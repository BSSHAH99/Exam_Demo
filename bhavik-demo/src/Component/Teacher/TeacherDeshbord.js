import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchStudentRequest } from "../../Redux/action/getStudent";
import { isTeacher } from "../../Utils/function";
import Table from "../ReusableComponents/Table";
import Loading from "../ReusableComponents/Loading";

const TeacherDeshbord = () => {
  const myState = useSelector((state) => state.getStudentReducer);
  const student = myState.student;

  let tableData = Object.values(student || {});
  let tableheadings = ["No", "name", "email", "status"];
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("called");
    isTeacher();
    dispatch(fetchStudentRequest());
  }, []);

  console.log("composnest render :>> ");
  return (
    <>
      <div className="container my-3">
        <div className="container">
          {myState.loading ? (
            <Loading />
          ) : (
            <Table tableheadings={tableheadings} tableData={tableData}></Table>
          )}
        </div>
      </div>
    </>
  );
};

export default TeacherDeshbord;
