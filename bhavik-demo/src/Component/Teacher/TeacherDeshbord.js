import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchStudentRequest } from "../../Redux/action/getStudent";
import { isTeacher } from "../function";
import Table from "../ReusableComponents/Table";
import Loading from "../ReusableComponents/Loading";
import { useState } from "react";

const TeacherDeshbord = () => {
  const navigate = useNavigate();

  const myState = useSelector((state) => state.getStudentReducer);
  const student = myState.student;

  let tableData = Object.values(student || {});
  let tableheadings = ["name", "email", "status"];
  const dispatch = useDispatch();

  useEffect(() => {
    isTeacher(navigate);
    dispatch(fetchStudentRequest());
  }, []);

  console.log("composnest render :>> ");
  return (
    <>
      <div className="container my-3">
        <div className="container">
          {myState.loading ? (
            <Loading></Loading>
          ) : (
            <Table tableheadings={tableheadings} tableData={tableData}></Table>
          )}
        </div>
      </div>
    </>
  );
};

export default TeacherDeshbord;
