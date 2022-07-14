import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Table from "./ReusableComponents/Table";

const Result = () => {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  let tableData = [];

  const myState = useSelector((state) => state.allExamStudentReducer);
  const exam = myState.exam;

  useEffect(() => {
    exam.find((items) =>
      items._id === id ? (tableData = items.Result) : null
    );
  }, []);

  console.log("tableData :>> ", tableData);

  return <Table tableData={tableData}></Table>;
};

export default Result;
