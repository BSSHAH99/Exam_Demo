import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { fetchVerifiedStudentRequest } from "../../Redux/action/getVerifiedStudent";
import { isTeacher } from "../function";
import Table from "../ReusableComponents/Table";
import Loading from "../ReusableComponents/Loading";

const VerifiedStudent = () => {
  const navigate = useNavigate();

  const myState = useSelector((state) => state.verifiedStudentReducer);
  const student = myState.student;

  let tableData = Object.values(student || {});
  let tableheadings = ["name", "email", "status"];
  const dispatch = useDispatch();
  useEffect(() => {
    isTeacher();
    dispatch(fetchVerifiedStudentRequest());
  }, []);

  const onDetail = (e, index, id) => {
    console.log("e, index, data._id :>> ", id);
    navigate("/student-detail?id=" + id);
  };

  return (
    <>
      <div className="container my-3">
        <div className="container">
          {myState.loading ? (
            <Loading></Loading>
          ) : (
            <Table
              tableheadings={tableheadings}
              tableData={tableData}
              Detail={onDetail}
              DetailName={"Detail"}
            ></Table>
          )}
        </div>
      </div>
    </>
  );
};

export default VerifiedStudent;

// <Link
// to={"/products/" + item.id}
// className="btn btn-primary"
// >
// Product Detail
// </Link>
