import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allExamStudentRequest } from "../../Redux/action/allExamStudent";
import { fetchExamPaperRequest } from "../../Redux/action/examPaper";
import { isStudent } from "../function";
import Loading from "../ReusableComponents/Loading";
import Modal from "../ReusableComponents/Modal";
import Table from "../ReusableComponents/Table";
// import { Button, Modal } from "react-bootstrap";

const AllExamStudent = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const myState = useSelector((state) => state.allExamStudentReducer);
  const exam = myState.exam;

  let tableData = Object.values(exam || {});
  const dispatch = useDispatch();

  useEffect(() => {
    isStudent(navigate);
    dispatch(allExamStudentRequest());
  }, []);

  const onGiveExam = (e, index, id) => {
    navigate("/exam-paper?id=" + id);
    dispatch(fetchExamPaperRequest(id));
  };

  const onResult = (e, index, id) => {
    navigate("/result?id=" + id);
  };

  const onDetail = (e, index, data) => {
    setShow(true);
    // navigate("/student-exam-detail", { state: data });

    // navigate("/student-exam-detail?id=" + id);
  };

  let tableheadings = ["subjectName", "email"];
  return (
    <>
      <div className="container my-3">
        <div className="container">
          {myState.loading ? (
            <Loading></Loading>
          ) : (
            <Table
              tableData={tableData}
              tableheadings={tableheadings}
              Result={onResult}
              ResultName={"Result"}
              GiveExam={onGiveExam}
              GiveExamName={"Give Exam"}
              Detail={onDetail}
              DetailName={"Detail"}
            ></Table>
          )}
        </div>
        {/* <Modal show={true}>
          <Modal.Header>deafksljsdfsfsd</Modal.Header>
          <Modal.Body>sadfgsdfgsdgasdgs</Modal.Body>
          <Modal.Footer>dfhdfghkdlfhgbkvdfzhglvfdkjgvdf</Modal.Footer>
        </Modal>
        <Button>Open Modal</Button> */}
        <Modal show={true}></Modal>
      </div>
    </>
  );
};

export default AllExamStudent;
