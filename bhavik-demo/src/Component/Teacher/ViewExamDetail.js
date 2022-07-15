import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { isTeacher, reset } from "../function";
import Loading from "../ReusableComponents/Loading";
import ExamPaperFields from "../../Constants/ExamPaperFields";
import DemoButton from "../ReusableComponents/DemoButton";
import PageNumber from "../ReusableComponents/PageNumber";

const initialData = {
  subjectName: "",
  questions: [],
  notes: [],
};
const ViewExamDetail = () => {
  const TotalQuestion = 15;
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  const [data, setData] = useState(initialData);
  const [index, setIndex] = useState(1);
  const [formValues, setFormValues] = useState({});
  const [cloneData, setCloneData] = useState({});

  const viewExam = useSelector((state) => state.viewExamReducer.exam);
  const exasmDetailState = useSelector((state) => state.examDetailReducer);

  const exasmDetail = exasmDetailState.examDetail;
  console.log("exasmDetail :>> ", exasmDetailState);
  console.log("viewExam :>> ", viewExam);

  const navigate = useNavigate();

  const myState = useSelector((state) => state.examDetailReducer);
  const exam = myState.examDetail;

  useEffect(() => {
    isTeacher(navigate);
    setTimeout(() => {
      editValue(index - 1);
    }, 2000);
  }, []);

  useEffect(() => {
    if (Object.keys(cloneData || {})?.length) {
      setFormValues(cloneData);
    }
  }, [cloneData]);

  const editValue = (number) => {
    let cloneData1 = {};
    Object.entries(data.questions[number] || {}).map(([key, value], i) => {
      switch (key) {
        case "subjectName":
          cloneData1.subjectName = value || "";
          break;
        case "options":
          cloneData1.option1 = value[0];
          cloneData1.option2 = value[1];
          cloneData1.option3 = value[2];
          cloneData1.option4 = value[3];
          break;
        case "question":
          cloneData1.question = value || "";
          break;
        case "answer":
          cloneData1.answer = value || "";
          break;
        default:
          break;
      }
    });
    setCloneData({ ...cloneData1, notes: data.notes[number] });
  };

  function btnClickPrevious() {
    editValue(index - 2);
    setIndex(index - 1);
  }
  function btnClickNext() {
    if (data.questions.length - 1 <= index) {
      setFormValues(reset(formValues));
    }
    editValue(index);
    setIndex(index + 1);
  }

  if (id) {
    console.log("this is edit code is heare");
    viewExam.find((items) =>
      items._id === id
        ? ((data.notes = items.notes), (data.subjectName = items.subjectName))
        : null
    );
    data.questions = exasmDetail.questions || "";

    formValues.subjectName = data.subjectName;
  }

  console.log("data", data);

  return (
    <div>
      <div>
        <div className="container my-3">
          <div className="container">
            {!data.questions.length > 0 ? (
              <Loading></Loading>
            ) : (
              <>
                <form>
                  <h2> Question No : {index}</h2>
                  {ExamPaperFields.map((data, i) => {
                    return (
                      <div key={i}>
                        {(() => {
                          switch (data.type) {
                            case "radio":
                              return (
                                <div>
                                  {data.value.map((ele, i) => {
                                    return (
                                      <div
                                        className="my-3"
                                        style={{ display: "flex" }}
                                        key={i}
                                      >
                                        <input
                                          className="form-check-input mx-3"
                                          type="radio"
                                          name={data.name}
                                          disabled={true}
                                          value={
                                            typeof ele === "string"
                                              ? ele
                                              : formValues[ele.name]
                                          }
                                          checked={
                                            formValues[ele.name] &&
                                            formValues[ele.name] ===
                                              formValues.answer
                                          }
                                        />
                                        {data.name !== "answer" ? (
                                          <p style={{ color: "red" }}></p>
                                        ) : null}
                                        {typeof ele === "string" ? (
                                          <label>{ele}</label>
                                        ) : (
                                          <>
                                            <div className="mb-3 ">
                                              <input
                                                className="form-control"
                                                type={ele.type}
                                                disabled={true}
                                                name={ele.name}
                                                value={
                                                  formValues[ele.name] || ""
                                                }
                                                placeholder={ele.placeholder}
                                              />
                                            </div>
                                          </>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              );
                            default:
                              return (
                                <div>
                                  <div>
                                    <div className="mb-3">
                                      <input
                                        className="form-control"
                                        label={data.label}
                                        disabled={true}
                                        value={formValues[data.name]}
                                        type={data.type}
                                        name={data.name}
                                        placeholder={data.placeholder}
                                      />
                                      <p style={{ color: "red" }}></p>
                                    </div>
                                  </div>
                                </div>
                              );
                          }
                        })()}
                      </div>
                    );
                  })}
                  <DemoButton
                    onClick={btnClickPrevious}
                    disabled={index > 1 ? false : true}
                    type={"button"}
                  >
                    Previous
                  </DemoButton>
                  <DemoButton
                    disabled={index < data.questions.length > 0 ? false : true}
                    onClick={btnClickNext}
                    type={"button"}
                  >
                    Next
                  </DemoButton>
                </form>
                <PageNumber
                  TotalPageNumber={TotalQuestion}
                  CurrentPageNumber={index}
                ></PageNumber>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewExamDetail;
