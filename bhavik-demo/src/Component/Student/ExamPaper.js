import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  fetchExamPaperRequest,
  giveExamRequest,
} from "../../Redux/action/examPaper";
import { isStudent, reset } from "../function";
import DemoButton from "../ReusableComponents/DemoButton";
import Loading from "../ReusableComponents/Loading";
import ExamPaperFields from "../../Constants/ExamPaperFields";
import validation from "../validation";
import PageNumber from "../ReusableComponents/PageNumber";

const initialData = {
  questions: [],
  givexam: [],
  notes: [],
};
const ExamPaper = () => {
  const TotalQuestion = 7;
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");

  const [data, setData] = useState(initialData);
  const [index, setIndex] = useState(1);
  const [formValues, setFormValues] = useState({});
  const [cloneData, setCloneData] = useState({});

  const myState = useSelector((state) => state.examPaperReducer);
  const examPaper = myState.examPaper;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    isStudent();
    ExamPaperFields.map((data) =>
      setFormValues((prv) => ({ ...prv, [data.name]: "" }))
    );

    setTimeout(() => {
      editValue(index - 1);
    }, 2000);
  }, []);

  useEffect(() => {
    if (Object.keys(cloneData || {})?.length) {
      setFormValues(cloneData);
    }
  }, [cloneData]);

  const handalSubmit = (e) => {
    e.preventDefault();
    data.givexam[index - 1] = {
      question: formValues._id,
      answer: formValues.answer,
    };
    if (data.givexam.length === TotalQuestion) {
      dispatch(giveExamRequest(id, data.givexam, navigate));
    }
    if (index < TotalQuestion) {
      setIndex(index + 1);
      editValue(index);
      setFormValues(reset(formValues));
    }
  };
  const editValue = (number) => {
    let cloneData1 = {};
    Object.entries(data.questions[number] || {}).map(([key, value], i) => {
      switch (key) {
        case "_id":
          cloneData1._id = value;
        case "question":
          cloneData1.question = value || "";
          break;
        case "options":
          cloneData1.option1 = value[0];
          cloneData1.option2 = value[1];
          cloneData1.option3 = value[2];
          cloneData1.option4 = value[3];
          break;
        case "answer":
          cloneData1.answer = value || "";

        default:
          break;
      }
    });
    {
      if (data.givexam[number]?.answer) {
        setCloneData({ ...cloneData1, answer: data.givexam[number].answer });
      } else setCloneData({ ...cloneData1 });
    }
  };

  const handleChange = (e) => {
    const newError = validation(e.target.name, e.target.value);
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  function btnClickPrevious() {
    editValue(index - 2);
    setIndex(index - 1);
  }
  function btnClickNext() {
    setFormValues(reset(formValues));
    editValue(index);
    setIndex(index + 1);
  }

  data.questions = examPaper || "";
  formValues.subjectName = data.subjectName;
  return (
    <div>
      <div>
        <div className="container my-3">
          <div className="container">
            {!data.questions.length > 0 ? (
              <Loading></Loading>
            ) : (
              <form onSubmit={handalSubmit}>
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
                                        onChange={handleChange}
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
                                              value={formValues[ele.name] || ""}
                                              placeholder={ele.placeholder}
                                              onChange={handleChange}
                                            />
                                          </div>
                                        </>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            );
                          // case "dropdown":
                          //   return (
                          //     <div>
                          //       <div className="mb-3">
                          //         <select
                          //           onChange={handleChange}
                          //           name={data.name}
                          //           value={formValues[data.name]}
                          //           className="form-select"
                          //         >
                          //           <option value="">Select Subject</option>
                          //           {data.options.map((option, index) => {
                          //             return <option key={index}>{option}</option>;
                          //           })}
                          //         </select>
                          //       </div>
                          //     </div>
                          //   );
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
                                      onChange={handleChange}
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
                <DemoButton type={"submit"}>
                  {index === 7 ? "Exam Preview" : "Confirm Answer"}
                </DemoButton>
              </form>
            )}
            <PageNumber
              TotalPageNumber={TotalQuestion}
              CurrentPageNumber={index}
            ></PageNumber>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExamPaper;
