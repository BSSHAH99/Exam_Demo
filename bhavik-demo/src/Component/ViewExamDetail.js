import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchStudentDetailRequest } from "../Redux/action/studentDetail";
import { ExamDetailRequest } from "../Redux/action/viewExamDetail";
import { isTeacher } from "./function";
import DemoTable from "./ReusableComponents/DemoTable";
import Table from "./ReusableComponents/Table";
import Loading from "./ReusableComponents/Loading";

const ViewExamDetail = () => {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const myState = useSelector((state) => state.examDetailReducer);
  const exam = myState.examDetail;

  let tableData = Object.values(exam || {});

  useEffect(() => {
    isTeacher(navigate);
    dispatch(ExamDetailRequest(id));
  }, []);
  let tableheadings = ["question", "options", "answer"];
  return (
    <>
      <div className="container my-3">
        <div className="container">
          {myState.loading ? (
            <Loading></Loading>
          ) : (
            // <DemoTable
            //   tableheadings={tableheadings}
            //   tableData={tableData}
            // ></DemoTable>
            <Table tableheadings={tableheadings} tableData={tableData}></Table>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewExamDetail;
