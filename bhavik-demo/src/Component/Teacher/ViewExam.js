import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteExamRequest,
  ViewExamRequest,
} from "../../Redux/action/viewExam";
import { ExamDetailRequest } from "../../Redux/action/viewExamDetail";
import { isTeacher } from "../function";
import DemoButton from "../ReusableComponents/DemoButton";
import Table from "../ReusableComponents/Table";
import Loading from "../ReusableComponents/Loading";

const ViewExam = () => {
  const navigate = useNavigate();

  const myState = useSelector((state) => state.viewExamReducer);
  const exam = myState.exam;
  // console.log("exam :>> ", exam);

  // const tableheadings = Object.keys(exam[0]);
  let tableData = Object.values(exam || {});
  let tableheadings = ["subjectName", "email"];
  const dispatch = useDispatch();

  // console.log("tableheadings :>> ", tableheadings);
  // console.log("exam :>> ", exam);

  useEffect(() => {
    isTeacher();
    dispatch(ViewExamRequest());
  }, []);

  const onDetail = (e, index, id) => {
    dispatch(ExamDetailRequest(id));
    navigate("/exam-detail?id=" + id);
  };

  const onEdit = (e, index, id, data) => {
    // dispatch(ExamDetailRequest(id));
    // console.log("e, index, data._id :>> ", id);
    navigate("/edit-exam?id=" + id, { state: data });
  };

  const onDelete = (e, index, id) => {
    const isDelete = window.confirm("hii bhavik ist you ");
    if (isDelete === true) {
      console.log("its is yes");
      dispatch(deleteExamRequest(id, navigate));
    }
    console.log("e, index, data._id :>> ", id);
    // dispatch(deleteExamRequest(id));
  };
  return (
    <>
      <div className="container my-3">
        <div className="container">
          {myState.loading ? (
            <Loading></Loading>
          ) : (
            <React.Fragment>
              <div>
                <DemoButton
                  type={"submit"}
                  onClick={() => navigate("/create-exam")}
                >
                  Create Exam
                </DemoButton>
              </div>
              <Table
                tableheadings={tableheadings}
                tableData={tableData}
                Detail={onDetail}
                DetailName={"Detail"}
                Edit={onEdit}
                EditName={"Edit"}
                Delete={onDelete}
                DeleteName={"Delete"}
              ></Table>
            </React.Fragment>
          )}
        </div>
      </div>
    </>
  );
};

export default ViewExam;
