import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { allExamStudentRequest } from "../../Redux/action/allExamStudent";
import { fetchExamPaperRequest } from "../../Redux/action/examPaper";
import { isStudent } from "../function";
import Loading from "../ReusableComponents/Loading";
import Table from "../ReusableComponents/Table";
import { Button, Modal } from "react-bootstrap";
// import ModalDialog from "../ReusableComponents/ModalDialog";

const AllExamStudent = () => {
  const [modalShow, setModalShow] = useState(false);
  const [data, setData] = useState();

  const navigate = useNavigate();

  const myState = useSelector((state) => state.allExamStudentReducer);
  const exam = myState.exam;

  let tableData = Object.values(exam || {});
  const dispatch = useDispatch();

  useEffect(() => {
    isStudent(navigate);
    dispatch(allExamStudentRequest());
  }, []);

  function MyVerticallyCenteredModal(props) {
    console.log("props :>> ", props);
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {data
            ? Object.entries(data).map(([key, values]) => {
                if (
                  typeof values === "object" &&
                  Array.isArray(values) &&
                  key === "Result"
                ) {
                  console.log("values", values);
                } else {
                  return (
                    <React.Fragment key={key}>
                      <h5>{key.toLocaleUpperCase()}</h5>
                      <h6>{values}</h6>
                    </React.Fragment>
                  );
                }
              })
            : null}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const onGiveExam = (e, index, id) => {
    navigate("/exam-paper?id=" + id);
    dispatch(fetchExamPaperRequest(id));
  };

  const onResult = (e, index, id, data) => {
    setModalShow(true);
    setData(data.Result[0]);
    // console.log("data :>> ", data.Result[0]);
  };

  const onDetail = (e, index, id, data) => {
    setModalShow(true);
    setData(data);
    // console.log("data :>> ", data);
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
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            data={data}
          />
        </div>
      </div>
    </>
  );
};

export default AllExamStudent;
