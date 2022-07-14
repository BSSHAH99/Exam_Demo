import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { fetchStudentDetailRequest } from "../Redux/action/studentDetail";
import { isTeacher } from "./function";
// import DemoTable from "./ReusableComponents/DemoTable";
import TestTable from "./ReusableComponents/TestTable";
import Loading from "./ReusableComponents/Loading";
import LastTable from "./ReusableComponents/LastTable";
import DemoTable from "./ReusableComponents/DemoTable";

const StudentDetail = () => {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const myState = useSelector((state) => state.studentDetailReducer);
  const student = myState.studentDetail;

  let th = [
    "name",
    "email",
    "Result",
    "resultStatus",
    "score",
    "studentId",
    "subjectName",
  ];
  let tableData = Object.values(student || {});

  useEffect(() => {
    isTeacher(navigate);
    dispatch(fetchStudentDetailRequest(id));
  }, []);

  return (
    <>
      <div className="container my-3">
        <div className="container">
          {myState.loading ? (
            <Loading></Loading>
          ) : null
          // <DemoTable tableData={tableData}></DemoTable>
          // <TestTable data={tableData}></TestTable>
          }
        </div>
      </div>
    </>
  );
};

export default StudentDetail;
