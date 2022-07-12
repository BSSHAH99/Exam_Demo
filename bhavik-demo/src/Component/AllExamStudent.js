import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allExamStudentRequest } from "../Redux/action/allExamStudent";
import { fetchExamPaperRequest } from "../Redux/action/examPaper";
import { isStudent } from "./function";
import DemoTable from "./ReusableComponents/DemoTable";
import Loading from "./ReusableComponents/Loading";
import Table from "./ReusableComponents/Table";
import TestTable from "./ReusableComponents/TestTable";

const AllExamStudent = () => {
  const navigate = useNavigate();

  const myState = useSelector((state) => state.allExamStudentReducer);
  const exam = myState.exam;

  let tableData = Object.values(exam || {});

  // let tableheadings = ["subjectName", "email", "Result", "notes"];
  const dispatch = useDispatch();

  useEffect(() => {
    isStudent(navigate);
    dispatch(allExamStudentRequest());
  }, []);

  const onDetail = (e, index, id) => {
    navigate("/exam-paper?id=" + id);
    dispatch(fetchExamPaperRequest(id));
  };

  // let tableheadings = ["", "subjectName", "email"];
  return (
    <>
      <div className="container my-3">
        <div className="container">
          {myState.loading ? (
            <Loading></Loading>
          ) : (
            // <DemoTable
            //   tableData={tableData}
            //   Detail={onDetail}
            //   DetailName={"Give Exam"}
            //   tableheadings={tableheadings}
            // ></DemoTable>
            <Table
              tableData={tableData}
              Detail={onDetail}
              DetailName={"Give Exam"}
            ></Table>
          )}
        </div>
      </div>
    </>
  );
};

export default AllExamStudent;
