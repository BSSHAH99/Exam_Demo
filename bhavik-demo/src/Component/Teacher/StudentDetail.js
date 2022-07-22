import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  fetchStudentDetailRequest,
  StudentDetailReset,
} from "../../Redux/action/studentDetail";
import { isTeacher } from "../../Utils/function";
import Table from "../ReusableComponents/Table";
import Loading from "../ReusableComponents/Loading";

const StudentDetail = () => {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  const dispatch = useDispatch();

  const myState = useSelector((state) => state.studentDetailReducer);
  const student = myState.studentDetail;

  let tableData = Object.values(student || {});
  let tableheadings = ["name", "email", "Result"];
  useEffect(() => {
    isTeacher();
    dispatch(fetchStudentDetailRequest(id));
    return () => {
      dispatch(StudentDetailReset());
    };
  }, []);
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

export default StudentDetail;
