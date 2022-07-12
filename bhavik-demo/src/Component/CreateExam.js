import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { isTeacher, reset, resetAll } from "./function";
import createExamFields from "../Constants/CreateExamFields";
import DemoButton from "./ReusableComponents/DemoButton";
import Loading from "./ReusableComponents/Loading";

import {
  createExamData,
  createExaminitialstate,
  createExamRequest,
} from "../Redux/action/createExam";
import { useState } from "react";
import validation from "./validation";
import { editExamData } from "../Redux/action/editExam";
import { ExamDetailRequest } from "../Redux/action/viewExamDetail";

const initialData = {
  subjectName: "",
  questions: [],
  notes: [],
};

const CreateExam = () => {
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("id");
  const [data, setData] = useState(initialData);
  const [index, setIndex] = useState(1);
  const [formValues, setFormValues] = useState({});
  const [formerror, setFormerror] = useState({});
  const [cloneData, setCloneData] = useState({});
  // const [active, setActive] = useState(false);

  const myState = useSelector((state) => state.createExamReducer);
  const naviget = useNavigate();

  const viewExam = useSelector((state) => state.viewExamReducer.exam);
  const exasmDetailState = useSelector((state) => state.examDetailReducer);

  const exasmDetail = exasmDetailState.examDetail;
  console.log("exasmDetail :>> ", exasmDetailState);
  console.log("viewExam :>> ", viewExam);

  useEffect(() => {
    isTeacher(naviget);
    // console.log(window.location.href);
    console.log("exasmDetail :>> ", exasmDetail);

    if (id) {
      setTimeout(() => {
        if (data.questions) {
          editValue(index - 1);
          console.log("exasmDetail is calingc dfgdghdfgdfgdfgdfgdfgdfgdf");
        }
      }, 2000);
    }

    console.log("data this is 51 liens :>> ", data);
    // setActive(true);
    createExamFields.map((data) =>
      setFormValues((prv) => ({ ...prv, [data.name]: "" }))
    );
    dispatch(createExaminitialstate());
  }, []);
  useEffect(() => {
    if (Object.keys(cloneData || {})?.length) {
      setFormValues(cloneData);
    }
  }, [cloneData]);

  const dispatch = useDispatch();

  const handalSubmit = (e) => {
    let error = {};
    e.preventDefault();
    Object.entries(formValues).forEach(([key, value]) => {
      const newError = validation(key, value);
      if (newError) error[key] = newError;
    });
    if (Object.entries(error).length) {
      setFormerror(error);
      return;
    } else {
      data.subjectName = formValues.subjectName || data.subjectName;

      data.questions[index - 1] = {
        question: formValues.question,
        answer: formValues.answer,
        options: [
          formValues.option1,
          formValues.option2,
          formValues.option3,
          formValues.option4,
        ],
      };
      data.notes[index - 1] = formValues.notes;

      if (index < 15) {
        setFormValues(reset(formValues));
        setIndex(index + 1);
      } else if ((index) => 15) {
        console.log("data.questions", data.questions.length);
        console.log("initialData.questions :>> ", initialData.questions.length);
        if (id) {
          console.log("data :>> ", data);
          dispatch(editExamData(id, data));
        } else if (!id) {
          // dispatch(createExamData(initialData));
          dispatch(createExamRequest(initialData, naviget));
          console.log("api caling from heare");
        }
      }
    }
    console.log("initialData", data);
  };

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

  const handleChange = (e) => {
    const newError = validation(e.target.name, e.target.value);
    setFormerror({ ...formerror, [e.target.name]: newError });
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
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
  // if (id) {
  //   dispatch(ExamDetailRequest(id));
  // }

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
    // <React.Fragment>
    //   <div>
    //     <Helmet>
    //       <title>Create Exam</title>
    //       <meta name="from" content="Create Exam" />
    //       <meta name="exam" content="Create-Exam" />
    //     </Helmet>
    //   </div>

    //   <div className="container my-3">
    //     <div className="container">
    //       <form onSubmit={handalSubmit}>
    //         {createExamFields.map((input, i) => {
    //           switch (input.type) {
    //             case "dropdown":
    //               return (
    //                 <div key={i}>
    //                   <DemoDropdown
    //                     {...input}
    //                     value={userData[input.name] || ""}
    //                     onChange={handleChange}
    //                   ></DemoDropdown>
    //                 </div>
    //               );
    //             case "radio":
    //               return (
    //                 <div>
    //                   {input.value.map((items, index) => {
    //                     console.log("items :>> ", items);
    //                     return (
    //                       <div
    //                         style={{ display: "flex", alignItems: "center" }}
    //                         key={index}
    //                       >
    //                         <div className="form-check">
    //                           <input
    //                             className="form-check-input"
    //                             type="radio"
    //                             name="flexRadioDisabled"
    //                             id="flexRadioDisabled"
    //                           />
    //                         </div>
    //                         <DemoRadioInput
    //                           key={index}
    //                           {...input}
    //                           value={userData[input.name]}
    //                           onChange={handleChange}
    //                           checked={
    //                             input?.label === userData[input.name] || ""
    //                           }
    //                         ></DemoRadioInput>
    //                         {typeof items === "String" ? (
    //                           <label>{items}</label>
    //                         ) : (
    //                           <Input
    //                             {...items}
    //                             type={items.type}
    //                             placeholder={items.placeholder}
    //                             lable={items}
    //                             name={items}
    //                             onChange={handleChange}
    //                             value={userData[items.name] ?? ""}
    //                           ></Input>
    //                         )}
    //                         {items.name !== "answer" ? (
    //                           <p style={{ color: "red" }}></p>
    //                         ) : null}
    //                       </div>
    //                     );
    //                   })}
    //                 </div>
    //               );
    //             default:
    //               return (
    //                 <div key={i}>
    //                   <DemoInput
    //                     {...input}
    //                     value={userData[input.name] || ""}
    //                     onChange={handleChange}
    //                   />
    //                 </div>
    //               );
    //           }
    //         })}
    //       </form>
    //     </div>
    //   </div>
    // </React.Fragment>

    <div>
      <div className="container my-3">
        <div className="container">
          {!data.questions ? (
            <Loading></Loading>
          ) : (
            <form onSubmit={handalSubmit}>
              <h2> Question No : {index}</h2>
              {createExamFields.map((data, i) => {
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
                                      <p style={{ color: "red" }}>
                                        {formerror[data.name]}
                                      </p>
                                    ) : null}
                                    {typeof ele === "string" ? (
                                      <label>{ele}</label>
                                    ) : (
                                      <>
                                        <div className="mb-3 ">
                                          <input
                                            className="form-control"
                                            type={ele.type}
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
                                    disabled={
                                      // data.name === "subjectName" && index > 1
                                      //   ? true
                                      //   :
                                      data?.disabled
                                    }
                                    value={formValues[data.name]}
                                    type={data.type}
                                    name={data.name}
                                    placeholder={data.placeholder}
                                    onChange={handleChange}
                                  />
                                  <p style={{ color: "red" }}>
                                    {formerror[data.name]}
                                  </p>
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
              {id ? (
                <DemoButton type={"submit"}>Update</DemoButton>
              ) : (
                <DemoButton type={"submit"}>
                  {data.questions.length === 14
                    ? "Create Exam"
                    : "Add Question"}
                </DemoButton>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateExam;
