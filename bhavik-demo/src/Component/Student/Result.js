import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Table from "../ReusableComponents/Table";

const Result = () => {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");

  const [tableData, setTableData] = useState([]);
  const tableheadings = ["subjectName", "score", "rank"];

  const myState = useSelector((state) => state.allExamStudentReducer);
  const exam = myState.exam;

  console.log("exam :>> ", exam);

  useEffect(() => {
    let data = exam.find((items) => {
      return items._id === id ? items : null;
    });
    setTableData(data.Result);
  }, []);

  console.log("tableData :>> ", tableData);

  return <Table tableheadings={tableheadings} tableData={tableData}></Table>;
};

export default Result;
