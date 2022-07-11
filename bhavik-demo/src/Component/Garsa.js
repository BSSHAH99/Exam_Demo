// import React, { useState, useEffect } from "react";
// import Form from "../../reusable/Form";
// import Sidebar from "../Sidebar";
// import { useNavigate } from "react-router-dom";

// const initial = {
//   subjectName: "",
//   questions: [],
//   notes: [],
// };

// const CreateExam = (data1 ) => {
//   let history = useNavigate();
//   const [data, setData] = useState(initial);
//   const [index, setIndex] = useState(1);
//   const [cloneData, setCloneData] = useState({});
//   const [pop, setPop] = useState(false);
//   const [formValue, setFormValue] = useState({});
//   const [giveExamData, setGiveExamData] = useState([]);

//   const questionData = [
//     {
//       type: "dropdown",
//       name: "subjectName",
//       options: ["Computer","Science", "Python3","English","node11 js", "Angular","react js", "react js","JS","Maths for 2 std","Science 10 std","C#","Advance JAVA"],
//       placeholder: "subjectName",
//     },
//     {
//       name: "question",
//       type: "text",
//       placeholder: "enter question",
//     },
//     {
//       type: "radio",
//       name: "answer",
//       value: [
//         {
//           type: "text",
//           name: "option1",
//           placeholder: "option1",
//         },
//         {
//           type: "text",
//           name: "option2",
//           placeholder: "option2",
//         },
//         {
//           type: "text",
//           name: "option3",
//           placeholder: "option3",
//         },
//         {
//           type: "text",
//           name: "option4",
//           placeholder: "option4",
//         },
//       ],
//     },
//     {
//       type: "text",
//       name: "answer",
//       placeholder: "answer",
//     },
//     {
//       label: "Note:-",
//       type: "text",
//       name: "notes",
//       placeholder: "notes",
//     },
//   ];
//   const button = ["prev", "next", "clear"];

//   const abc = data1 &&data1.data1 ? parseInt(data1.data1.index): null

// // console.log(data1.data3.data.data)
// // data1 &&  console.log("data1",data1.data2.data.data)

//   useEffect(() => {

//     // data1.data2.data.data && data1.data2.data.data.map(value => data.questions.push(value))
//     // console.log("datafadf", data1.data3.data.data)
//     data1 && data1.data3  && setGiveExamData(data1.data3.data.data)
//     data1 &&data1.data3 && setIndex(data1.data3.index+1)
//     data1 &&data1.data3 && data1.data3.data.data.map(value=>data.questions.push(value));
//     data1 &&data1.data3 && editValue(data1.data3.index)
//     data1 && data1.data2 && data1.data2.data.map(value=> data.questions.push(value))
//     data1 && data1.data2 && editValue(index-1)
//   data1&& data1.data1&&  data1.data1.data.map(data1 =>data.questions.push(data1))
//   data1&& data1.data1&& setIndex(abc+1) //|| editValue(abc)
//   data1&& data1.data1&& editValue(abc)

//   }, [])

//   console.log("crearet Exam ")
//   // useEffect(() => {
//   //   return () => {
//   //     window.addEventListener('popstate', function (event){
//   //       let text = "sdfdfg";
//   //       window.confirm(text)
//   //       console.log(123)
//   //     });
//   //   }
//   // }, [])

//   function checkIfDuplicateExists(arr) {
//     return arr?.length === new Set(arr).size;
//   }

//   const handleValue = (value) => {
//     // console.log("value==>",value)

//     const options = [];
//     options.push(value.option1, value.option2, value.option3, value.option4);

//        data1.data1 && AddSubjectName(value)
//       //  data1.data2 && giveexam(value)

//     if (checkIfDuplicateExists(options)) {
//       index < 15 && setIndex(index + 1);
//       setPop(false)
//       if (index === 1) {
//         data.subjectName = value.subjectName;
//       }
//       data.questions[index - 1] = {
//         question: value.question,
//         answer: value.answer,
//         options: [value.option1, value.option2, value.option3, value.option4],
//       };
//       data.notes[index - 1] = value.notes;

//     //  giveExamData[index-1]= {question:data1.data2.data[index-1]._id, answer: value.answer===undefined?" ":value.answer}
//  (data1.data2 || data1.data3) &&     (giveExamData[index-1]= {question: window.location.pathname === "/edit-give-exam" ?data1.data3.data.data[index-1].question :data1.data2.data[index-1].question      ,options: window.location.pathname === "/edit-give-exam" ?data1.data3.data.data[index-1].options :data1.data2.data[index-1].options, answer: value.answer===undefined?" ":value.answer})

//       data1.data2  &&index===7 &&  history("/preview-exam",{state:{data:giveExamData}})
//       data1.data3  &&index===7 &&  history("/preview-exam",{state:{data:giveExamData}})

//       index === 15  && api()
//       //  console.log(data)

//       if (data.questions[index] !== undefined) {
//         editValue(index);
//       }
//     } else {
//       alert("Duplicate option not allowed");
//     }
//   };

//   // const giveexam =()=>{
//   //   console.log(123456)
//   //   giveExamData ={ question:123}
//   // }

//   const AddSubjectName=(value)=>{
//     data.subjectName = value.subjectName;
//     data.notes = data1.data1.note[data1.data1.subjectName].notes
//   }

//   const api = () => {
//      let dd = localStorage.getItem("data");
//     //  console.log("JSON.stringify(data),",JSON.stringify(data))
//     window.location.pathname === "/edit-exam" ? sagar() :

//     fetch("https://nodejsexamination.herokuapp.com/dashboard/Teachers/Exam", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//         "access-token": JSON.parse(dd).token,
//       },
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         alert(json.message)
//         if(json.statusCode === 200){
//             setIndex(16)
//             console.log("add",json)
//         }
//       });

//   };

//   const sagar=()=>{
//     // data.questions.push(data1.data1.data)
//     // console.log("JSON.stringify(data)",JSON.stringify(data))

//     let dd = localStorage.getItem("data");
//     fetch(`https://nodejsexamination.herokuapp.com/dashboard/Teachers/editExam?id=${data1.data1.updateExamId}`, {
//       method: "PUT",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//         "access-token": JSON.parse(dd).token,
//       },
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         console.log("json", json)
//         alert(json.message)
//         if(json.statusCode === 200){
//           // console.log("window.history",window.history)
//           // console.log("123456==>", window.history.replaceState( {} , 'foo' ))
//             setIndex(16)
//             console.log("update",json)
//         }
//       });
//   }

//   const reset = (obj) => {
//     const newObj = Object.keys(obj).reduce((accumulator, current) => {
//       accumulator[current] = "";
//       return accumulator;
//     }, {});
//     return newObj;
//   };

//   const popup =(formvalue,name,value)=>{
//   //  console.log(formvalue,name1,value)

//   setFormValue({...formValue,[name]:value})
//    value? data.questions[index-1]&& setPop(true):setPop(false);
//   }

//   const see=()=>{
//     if (window.location.pathname === "/give-exam"||window.location.pathname === "/edit-give-exam"?true:window.confirm("Are you want to update?")) {

//       (data1.data2 || data1.data3) &&     ( giveExamData[index-1]= data1.data2? {question: data1.data2.data[index-1].question ,
//                options:data1.data2.data[index-1].options, answer:formValue.answer} :
//                {question: data1.data3.data.data[index-1].question ,
//                    options: data1.data3.data.data[index-1].options, answer:formValue.answer})

//       // giveExamData[index-1]= {question: data1.data2.data[index-1].question ,
//       //            options:data1.data2.data[index-1].options, answer:formValue.answer}

//       //   data.subjectName = formValue.subjectName ?formValue.subjectName: data1.data1?.note[data1.data1.subjectName].subjectName;
//       // data.questions[index - 1] = {
//       //   question: formValue.question ?formValue.question:data1.data3.data.data[index-1].question ||data1.data2.data[index-1].question|| data1.data1.data[index-1].question,
//       //   answer: formValue.answer? formValue.answer:data1.data3.data.data[index-1].answer ||data1.data2.data[index-1].answer|| data1.data1.data[index-1].answer,
//       //   options: [
//       //     formValue.option1 ?formValue.option1 :data1.data3.data.data[index-1].options[0]||data1.data2.data[index-1].options[0] ||data1.data1.data[index-1].options[0],
//       //      formValue.option2 ? formValue.option2:data1.data3.data.data[index-1].options[1]||data1.data2.data[index-1].options[1] ||data1.data1.data[index-1].options[1],
//       //       formValue.option3? formValue.option3:data1.data3.data.data[index-1].options[2]||data1.data2.data[index-1].options[2]||data1.data1.data[index-1].options[2],
//       //        formValue.option4? formValue.option4:data1.data3.data.data[index-1].options[3]||data1.data2.data[index-1].options[3]||data1.data1.data[index-1].options[3],
//       //       ],
//       // };
//       // data.notes[index - 1] = formValue.notes?formValue.notes: data1.data1.note[data1.data1.subjectName].notes[index-1];

//       data.subjectName = formValue.subjectName ?formValue.subjectName: data1.data1?.note[data1.data1.subjectName].subjectName;
//       data.questions[index - 1] = {
//         question: formValue.question ?formValue.question: window.location.pathname === "/give-exam"? data1.data2.data[index-1].question:window.location.pathname === "/edit-give-exam"? data1.data3.data.data[index-1].question: data1.data1.data[index-1].question,
//         answer: formValue.answer? formValue.answer:window.location.pathname === "/give-exam"? data1.data2.data[index-1].answer:window.location.pathname === "/edit-give-exam"?data1.data3.data.data[index-1].answer: data1.data1.data[index-1].answer,
//         options: [
//           formValue.option1 ?formValue.option1 : window.location.pathname === "/give-exam"?data1.data2.data[index-1].options[0]:window.location.pathname === "/edit-give-exam"? data1.data3.data.data[index-1].options[0]:data1.data1.data[index-1].options[0],
//           formValue.option2 ? formValue.option2:window.location.pathname === "/give-exam"?data1.data2.data[index-1].options[1]:window.location.pathname === "/edit-give-exam"?data1.data3.data.data[index-1].options[1]:data1.data1.data[index-1].options[1],
//           formValue.option3 ? formValue.option3:window.location.pathname === "/give-exam"?data1.data2.data[index-1].options[2]:window.location.pathname === "/edit-give-exam"?data1.data3.data.data[index-1].options[2]:data1.data1.data[index-1].options[2],
//           formValue.option4 ? formValue.option4:window.location.pathname === "/give-exam"?data1.data2.data[index-1].options[3]:window.location.pathname === "/edit-give-exam"?data1.data3.data.data[index-1].options[3]:data1.data1.data[index-1].options[3],
//         ]

//       };
//      data1.data1 && (data.notes[index - 1] = formValue.notes?formValue.notes: data1.data1.note[data1.data1.subjectName].notes[index-1])

//       console.log("Accepted")
//     } else {
//       console.log("Declined")
//     }
//   }

//   const next = (e) => {

//     //  data.questions[index-1].question && setPop(false)

//     (data1.data2 || data1.data3) &&  (giveExamData[index-1]= {question: window.location.pathname === "/edit-give-exam" ?data1.data3.data.data[index-1].question :data1.data2.data[index-1].question ,options: window.location.pathname === "/edit-give-exam" ?data1.data3.data.data[index-1].options :data1.data2.data[index-1].options,
//     answer:giveExamData[index]?.answer||" "})

//     // data1.data2 && (console.log(123) || formValue.answer?console.log(123456):console.log(123))

//     data1 && console.log("next button click",giveExamData)

//     pop? see():setPop(null)

//     index < 15 && setIndex(index + 1);
//     if (data.questions[index]?.question) {
//       // console.log(data.questions[index]?.question)
//       editValue(index);
//     } else {
//       setCloneData(reset(cloneData));
//     }

//   };

//   const prev = (e) => {

//     pop? see():setPop(null)
//     data.questions[index-1]&& setPop(false)
//     index > 0 && setIndex(index - 1);
//     editValue(index - 2);
//     // console.log("data1", data1.data1.data[index-2])
//   };

//   const editValue = (number) => {
//     let cloneData1 = {};
//     Object.entries(data.questions[number]||{}).map(([key, value], i) => {
//       switch (key) {
//         case "options":
//           cloneData1.option1 = value[0];
//           cloneData1.option2 = value[1];
//           cloneData1.option3 = value[2];
//           cloneData1.option4 = value[3];
//           break;
//         case "question":
//           cloneData1.question = value;
//           break;
//         case "answer":
//           cloneData1.answer = value;
//           break;
//         default:
//           break;
//       }
//     });
//     // data1.data2? setCloneData({...cloneData1,subjectName:data1.data2.subjectName[data1.data2.index].subjectName}) :
//    data1.data1 ?
//         setCloneData({...cloneData1, notes:data1.data1.note[data1.data1.subjectName].notes[number],subjectName:data.subjectName?data.subjectName: data1.data1.note[data1.data1.subjectName].subjectName }):
//          data1.data2? setCloneData({...cloneData1,subjectName:data1.data2.subjectName[data1.data2.index].subjectName}) :  setCloneData({ ...cloneData1, notes: data.notes[number] });
//   };
// // console.log(data.subjectName)
//   return (
//     <div style={{ display: "flex" }}>
//      {/ {window.location.pathname === "/give-exam"||window.location.pathname === "/edit-give-exam"? null:<Sidebar />}   /}
//      <Sidebar />

//       <div style={{ display: "inline-block" }}>
//       {index===16 ?  window.location.pathname === "/edit-exam" ?<div><h2> Update exam successfully.</h2></div>:
//       <div><h2>Exam created successfully.</h2></div> :
//        <div>
//        { window.location.pathname === "/create-exam" ? <h3>CreateExam</h3> : window.location.pathname === "/give-exam"|| window.location.pathname === "/edit-give-exam"?<h3>GiveExam</h3>: <h3>EditExam</h3>}
//         <h2>Question No:- {index}</h2>
//         <Form
//           formAttribute={questionData}
//           handleValue={handleValue}
//           button={button}
//           index={index}
//           prev={prev}
//           next={next}
//           data={data}
//           cloneData={cloneData}
//           popup={popup}
//           pop={pop}
//           // update={update}
//         />
//        </div>

//     }
//       </div>
//     </div>
//   );
// };

// export default CreateExam;

// import React, { useState, useEffect } from "react";
// import Input from "./Input";
// import checkValidation from "../util/Validated";
// import { valid } from "../util/Validated";
// import Button from "./Button";

// const Form = ({
//   formAttribute,
//   handleValue,
//   button,
//   index,
//   next,
//   prev,
//   data,
//   cloneData,
//   popup,
//   pop
//   // update,
// }) => {
//   const [formValues, setFormValues] = useState({});
//   const [formErrors, setFormErrors] = useState({});
//   const [optionError, setOptionError] = useState(false);

//   useEffect(() => {

//     formAttribute.map((data) =>
//       setFormValues((prv) => ({ ...prv, [data.name]: "" }))
//     );
//     formAttribute.map(
//       (data) =>
//         data.value &&
//         typeof data.value !== "string" &&
//         data.value.map((val) =>
//           typeof val !== "string"
//             ? setFormValues((prv) => ({ ...prv, [val.name]: "" }))
//             : null
//         )
//     );

//   }, []);

//   useEffect(() => {
//     if (Object.keys(cloneData || {})?.length) {
//       setFormValues(cloneData);
//     }
//   }, [cloneData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//    next&& popup(formValues,name, value)

//     const abc = [
//       formValues.option1,
//       formValues.option2,
//       formValues.option3,
//       formValues.option4,
//     ];

//     let result = false;
//     result = abc.some((e, i) => {
//       return abc.indexOf(e) !== i;
//     });
//     if (result || (abc.includes(value) && value !== "")) {
//       if (result && abc.includes(value) && value !== "") {
//         setOptionError(true);
//       } else {
//         if (result === false) {
//           setOptionError(true);
//         }
//         if (result === true) {
//           setOptionError(false);
//         }
//       }
//       if (name === "answer") {
//         // setOptionError(false)
//         if (result !== true) {
//           setOptionError(false);
//         }
//       }
//     } else {
//       setOptionError(false);
//     }

//     setFormValues({ ...formValues, [name]: value });
//     checkValidation(name, value, formErrors, setFormErrors, formValues);
//   };

//   const reset = (obj) => {
//     const newObj = Object.keys(obj).reduce((accumulator, current) => {
//       accumulator[current] = "";
//       return accumulator;
//     }, {});
//     return newObj;
//   };

//   const reset1 = (obj) => {
//     const newObj = Object.keys(obj).reduce((accumulator, current) => {
//       if (current !== "subjectName") {
//         accumulator[current] = "";
//       }
//       return accumulator;
//     }, {});
//     return newObj;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     valid(formValues, formErrors, setFormErrors);
//     let ddd = Object.values(formErrors);
//     if (ddd.every((s) => s === "")) {
//       handleValue(formValues);
//    console.log("clicking")

//       if (formValues.question === "") {
//         if (formValues.subjectName) {
//           setFormValues(reset1(formValues));
//         } else {
//           setFormValues(reset(formValues));
//         }
//       }

//       // console.log("data.questions[index]===undefined",data.questions[index]===undefined);

//       if (data.questions[index] === undefined) {
//         if (formValues.subjectName) {
//           setFormValues(reset1(formValues));
//         } else {
//           setFormValues(reset(formValues));
//         }
//       }
//     }
//   };

//   const clear = () => {
//     if (index === 1) {
//       setFormValues(reset(formValues));
//     } else {
//       setFormValues(reset1(formValues));
//     }
//   };

//   const prevClearErrors = () => {
//     setFormErrors(reset(formErrors));
//     setOptionError(false);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         {formAttribute.map((data, i) => {
//           return (
//             <div key={i}>
//               {(() => {
//                 switch (data.type) {
//                   case "radio":
//                     return (
//                       <div>
//                         {data.value.map((ele, i) => {
//                           // console.log("ele", formValues[ele.name]=== formValues.answer, ele);
//                           return (
//                             <div style={{ display: "flex" }} key={i}>

//                             <Input
//                               type="radio"
//                               name={data.name}
//                               onChange={handleChange}
//                               value={
//                                 typeof ele === "string"
//                                   ? ele
//                                   : formValues[ele.name]
//                               }
//                               checked={
//                                 formValues[ele.name] &&
//                                 formValues[ele.name] === formValues.answer
//                               }
//                             />
//                               {typeof ele === "string" ? (
//                                 <label>{ele}</label>
//                               ) : (
//                                 <>

//                                   <Input
//                                     disabled={window.location.pathname === "/give-exam"}
//                                     type={ele.type}
//                                     name={ele.name}
//                                     value={formValues[ele.name] ?? ""}
//                                     placeholder={ele.placeholder}
//                                     onChange={handleChange}
//                                   />

//                                   <p style={{ color: "red" }}>
//                                     {formErrors[ele.name]}
//                                   </p>
//                                 </>
//                               )}
//                             </div>
//                           );
//                         })}
//                         {data.name !== "answer" ? (
//                           <p style={{ color: "red" }}>
//                             {formErrors[data.name]}
//                           </p>
//                         ) : null}
//                         <p style={{ color: "red" }}>
//                           {optionError ? "duplicate option not allow" : null}
//                         </p>
//                       </div>
//                     );

//                   case "dropdown":
//                     return (
//                       <div>
//                         <select
//                           disabled={index !== 1 || window.location.pathname === "/give-exam"}
//                           onChange={handleChange}
//                           name={data.name}
//                           value={formValues[data.name]}
//                         >
//                           <option value="">select subject</option>
//                           {data.options.map((option, i) => {
//                             return (
//                               <option key={i} value={option}>
//                                 {option}
//                               </option>
//                             );
//                           })}
//                         </select>
//                         <p style={{ color: "red" }}>{formErrors[data.name]}</p>
//                       </div>
//                     );
//                   default:
//                     // console.log("data.name",data.name)
//                     return (
//                       <div>
//                       {window.location.pathname === "/login" || window.location.pathname === "/register"||
//                       window.location.pathname === "/create-exam" ||window.location.pathname === "/edit-exam" ||
//                        (window.location.pathname === "/give-exam" && data.name!=="notes") || (window.location.pathname === "/edit-give-exam" && data.name!=="notes")?
//                       <div>
//                         <Input
//                        label={data.label}
//                        value={
//                          window.location.pathname === "/create-exam" || window.location.pathname === "/edit-exam"
//                            ? formValues[data.name] === "" &&
//                              data.name === "notes"
//                              ? (formValues[data.name] = " ")
//                              : formValues[data.name] ?? ""
//                            : formValues[data.name] ?? ""
//                        }
//                        type={data.type}
//                        name={data.name}
//                        placeholder={data.placeholder}
//                        onChange={handleChange}
//                      />
//                      <p style={{ color: "red" }}>{formErrors[data.name]}</p>

//                       </div>

//                       :null}

//                         {/* <Input
//                           label={data.label}
//                           value={
//                             window.location.pathname === "/create-exam" || window.location.pathname === "/edit-exam"
//                               ? formValues[data.name] === "" &&
//                                 data.name === "notes"
//                                 ? (formValues[data.name] = " ")
//                                 : formValues[data.name] ?? ""
//                               : formValues[data.name] ?? ""
//                           }
//                           type={data.type}
//                           name={data.name}
//                           placeholder={data.placeholder}
//                           onChange={handleChange}
//                         />
//                         <p style={{ color: "red" }}>{formErrors[data.name]}</p> */}
//                       </div>
//                     );
//                 }
//               })()}
//             </div>
//           );
//         })}

//         {button &&
//           button.map((child, i) => (
//             <Button
//               key={i}
//               disabled={ child === "prev"
//                   ?   index === 1 ? true: false   :  index===15 || ( window.location.pathname === "/give-exam" &&index===7)||  ( window.location.pathname === "/edit-give-exam" &&index===7)? child==="next" || child==="clear": index <= data.questions.length ? false || (window.location.pathname === "/give-exam" &&child==="clear")||(window.location.pathname === "/edit-give-exam" &&child==="clear"):  child === "next"
//               }
//               children={child}
//               value={child}
//               onClick={
//                 child === "clear"
//                   ? clear
//                   : child === "next"
//                   ? () => {
//                       next();
//                       prevClearErrors();
//                     }
//                   : child === "prev"
//                   ? () => {
//                       prev();
//                       prevClearErrors();
//                     }
//                   : undefined
//               }
//               type={
//                 child === "clear" || child === "next" || child === "prev"
//                   ? "button"
//                   : "submit"
//               }
//             />
//           ))}

//         <Button
//           children={
//             button
//               ? index === 15
//                 ?window.location.pathname === "/edit-exam"? "update":  "create exam"
//                 : index <= data.questions.length
//                 ? window.location.pathname === "/edit-exam"? "update":window.location.pathname === "/create-exam"?"update":
//                 window.location.pathname === "/give-exam" || window.location.pathname === "/edit-give-exam"? index===7?"preview":pop?"add":"skip": "update"
//                 : "add"
//               : "submit"
//           }
//           disabled={window.location.pathname === "/give-exam"&& index<7? true: window.location.pathname === "/edit-give-exam" && index<7?true: false}
//           // onClick={update}
//         />
//       </form>
//     </div>
//   );
// };

// export default Form;

// **************************************************************************************************************************************

// import React, { useState, useEffect } from "react";
// import Form from "../../reusable/Form";
// import Sidebar from "../Sidebar";
// import { useNavigate } from "react-router-dom";

// const initial = {
//   subjectName: "",
//   questions: [],
//   notes: [],
// };

// const CreateExam = (data1 ) => {
//   let history = useNavigate();
//   const [data, setData] = useState(initial);
//   const [index, setIndex] = useState(1);
//   const [cloneData, setCloneData] = useState({});
//   const [pop, setPop] = useState(false);
//   const [formValue, setFormValue] = useState({});
//   const [giveExamData, setGiveExamData] = useState([]);

//   const questionData = [
//     {
//       type: "dropdown",
//       name: "subjectName",
//       options: ["Computer","Science", "Python3","English","node11 js", "Angular","react js", "react js","JS","Maths for 2 std","Science 10 std","C#","Advance JAVA"],
//       placeholder: "subjectName",
//     },
//     {
//       name: "question",
//       type: "text",
//       placeholder: "enter question",
//     },
//     {
//       type: "radio",
//       name: "answer",
//       value: [
//         {
//           type: "text",
//           name: "option1",
//           placeholder: "option1",
//         },
//         {
//           type: "text",
//           name: "option2",
//           placeholder: "option2",
//         },
//         {
//           type: "text",
//           name: "option3",
//           placeholder: "option3",
//         },
//         {
//           type: "text",
//           name: "option4",
//           placeholder: "option4",
//         },
//       ],
//     },
//     {
//       type: "text",
//       name: "answer",
//       placeholder: "answer",
//     },
//     {
//       label: "Note:-",
//       type: "text",
//       name: "notes",
//       placeholder: "notes",
//     },
//   ];
//   const button = ["prev", "next", "clear"];

//   const abc = data1 &&data1.data1 ? parseInt(data1.data1.index): null

//   useEffect(() => {

//     data1 && data1.data3  && setGiveExamData(data1.data3.data.data)
//     data1 &&data1.data3 && setIndex(data1.data3.index+1)
//     data1 &&data1.data3 && data1.data3.data.data.map(value=>data.questions.push(value));
//     data1 &&data1.data3 && editValue(data1.data3.index)
//     data1 && data1.data2 && data1.data2.data.map(value=> data.questions.push(value))
//     data1 && data1.data2 && editValue(index-1)
//   data1&& data1.data1&&  data1.data1.data.map(data1 =>data.questions.push(data1))
//   data1&& data1.data1&& setIndex(abc+1) //|| editValue(abc)
//   data1&& data1.data1&& editValue(abc)

//   }, [])

//   console.log("crearet Exam ")

//   function checkIfDuplicateExists(arr) {
//     return arr?.length === new Set(arr).size;
//   }

//   const handleValue = (value) => {

//     const options = [];
//     options.push(value.option1, value.option2, value.option3, value.option4);

//        data1.data1 && AddSubjectName(value)

//     if (checkIfDuplicateExists(options)) {
//       index < 15 && setIndex(index + 1);
//       setPop(false)
//       if (index === 1) {
//         data.subjectName = value.subjectName;
//       }
//       data.questions[index - 1] = {
//         question: value.question,
//         answer: value.answer,
//         options: [value.option1, value.option2, value.option3, value.option4],
//       };
//       data.notes[index - 1] = value.notes;

//  (data1.data2 || data1.data3) &&     (giveExamData[index-1]= {question: window.location.pathname === "/edit-give-exam" ?data1.data3.data.data[index-1].question :data1.data2.data[index-1].question      ,options: window.location.pathname === "/edit-give-exam" ?data1.data3.data.data[index-1].options :data1.data2.data[index-1].options, answer: value.answer===undefined?" ":value.answer})

//       data1.data2  &&index===7 &&  history("/preview-exam",{state:{data:giveExamData}})
//       data1.data3  &&index===7 &&  history("/preview-exam",{state:{data:giveExamData}})

//       index === 15  && api()

//       if (data.questions[index] !== undefined) {
//         editValue(index);
//       }
//     } else {
//       alert("Duplicate option not allowed");
//     }
//   };

//   const AddSubjectName=(value)=>{
//     data.subjectName = value.subjectName;
//     data.notes = data1.data1.note[data1.data1.subjectName].notes
//   }

//   const api = () => {
//      let dd = localStorage.getItem("data");

//     window.location.pathname === "/edit-exam" ? sagar() :

//     fetch("https://nodejsexamination.herokuapp.com/dashboard/Teachers/Exam", {
//       method: "POST",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//         "access-token": JSON.parse(dd).token,
//       },
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         alert(json.message)
//         if(json.statusCode === 200){
//             setIndex(16)
//             console.log("add",json)
//         }
//       });

//   };

//   const sagar=()=>{

//     let dd = localStorage.getItem("data");
//     fetch(`https://nodejsexamination.herokuapp.com/dashboard/Teachers/editExam?id=${data1.data1.updateExamId}`, {
//       method: "PUT",
//       body: JSON.stringify(data),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//         "access-token": JSON.parse(dd).token,
//       },
//     })
//       .then((response) => response.json())
//       .then((json) => {
//         console.log("json", json)
//         alert(json.message)
//         if(json.statusCode === 200){

//             setIndex(16)
//             console.log("update",json)
//         }
//       });
//   }

//   const reset = (obj) => {
//     const newObj = Object.keys(obj).reduce((accumulator, current) => {
//       accumulator[current] = "";
//       return accumulator;
//     }, {});
//     return newObj;
//   };

//   const popup =(formvalue,name,value)=>{

//   setFormValue({...formValue,[name]:value})
//    value? data.questions[index-1]&& setPop(true):setPop(false);
//   }

//   const see=()=>{
//     if (window.location.pathname === "/give-exam"||window.location.pathname === "/edit-give-exam"?true:window.confirm("Are you want to update?")) {

//       (data1.data2 || data1.data3) &&     ( giveExamData[index-1]= data1.data2? {question: data1.data2.data[index-1].question ,
//                options:data1.data2.data[index-1].options, answer:formValue.answer} :
//                {question: data1.data3.data.data[index-1].question ,
//                    options: data1.data3.data.data[index-1].options, answer:formValue.answer})

//       data.subjectName = formValue.subjectName ?formValue.subjectName: data1.data1?.note[data1.data1.subjectName].subjectName;
//       data.questions[index - 1] = {
//         question: formValue.question ?formValue.question: window.location.pathname === "/give-exam"? data1.data2.data[index-1].question:window.location.pathname === "/edit-give-exam"? data1.data3.data.data[index-1].question: data1.data1.data[index-1].question,
//         answer: formValue.answer? formValue.answer:window.location.pathname === "/give-exam"? data1.data2.data[index-1].answer:window.location.pathname === "/edit-give-exam"?data1.data3.data.data[index-1].answer: data1.data1.data[index-1].answer,
//         options: [
//           formValue.option1 ?formValue.option1 : window.location.pathname === "/give-exam"?data1.data2.data[index-1].options[0]:window.location.pathname === "/edit-give-exam"? data1.data3.data.data[index-1].options[0]:data1.data1.data[index-1].options[0],
//           formValue.option2 ? formValue.option2:window.location.pathname === "/give-exam"?data1.data2.data[index-1].options[1]:window.location.pathname === "/edit-give-exam"?data1.data3.data.data[index-1].options[1]:data1.data1.data[index-1].options[1],
//           formValue.option3 ? formValue.option3:window.location.pathname === "/give-exam"?data1.data2.data[index-1].options[2]:window.location.pathname === "/edit-give-exam"?data1.data3.data.data[index-1].options[2]:data1.data1.data[index-1].options[2],
//           formValue.option4 ? formValue.option4:window.location.pathname === "/give-exam"?data1.data2.data[index-1].options[3]:window.location.pathname === "/edit-give-exam"?data1.data3.data.data[index-1].options[3]:data1.data1.data[index-1].options[3],
//         ]

//       };
//      data1.data1 && (data.notes[index - 1] = formValue.notes?formValue.notes: data1.data1.note[data1.data1.subjectName].notes[index-1])

//       console.log("Accepted")
//     } else {
//       console.log("Declined")
//     }
//   }

//   const next = (e) => {

//     (data1.data2 || data1.data3) &&  (giveExamData[index-1]= {question: window.location.pathname === "/edit-give-exam" ?data1.data3.data.data[index-1].question :data1.data2.data[index-1].question ,options: window.location.pathname === "/edit-give-exam" ?data1.data3.data.data[index-1].options :data1.data2.data[index-1].options,
//     answer:giveExamData[index]?.answer||" "})

//     data1 && console.log("next button click",giveExamData)

//     pop? see():setPop(null)

//     index < 15 && setIndex(index + 1);
//     if (data.questions[index]?.question) {

//       editValue(index);
//     } else {
//       setCloneData(reset(cloneData));
//     }

//   };

//   const prev = (e) => {

//     pop? see():setPop(null)
//     data.questions[index-1]&& setPop(false)
//     index > 0 && setIndex(index - 1);
//     editValue(index - 2);

//   };

//   const editValue = (number) => {
//     let cloneData1 = {};
//     Object.entries(data.questions[number]||{}).map(([key, value], i) => {
//       switch (key) {
//         case "options":
//           cloneData1.option1 = value[0];
//           cloneData1.option2 = value[1];
//           cloneData1.option3 = value[2];
//           cloneData1.option4 = value[3];
//           break;
//         case "question":
//           cloneData1.question = value;
//           break;
//         case "answer":
//           cloneData1.answer = value;
//           break;
//         default:
//           break;
//       }
//     });

//    data1.data1 ?
//         setCloneData({...cloneData1, notes:data1.data1.note[data1.data1.subjectName].notes[number],subjectName:data.subjectName?data.subjectName: data1.data1.note[data1.data1.subjectName].subjectName }):
//          data1.data2? setCloneData({...cloneData1,subjectName:data1.data2.subjectName[data1.data2.index].subjectName}) :  setCloneData({ ...cloneData1, notes: data.notes[number] });
//   };

//   return (
//     <div style={{ display: "flex" }}>
//      {/ {window.location.pathname === "/give-exam"||window.location.pathname === "/edit-give-exam"? null:<Sidebar />}   /}
//      <Sidebar />

//       <div style={{ display: "inline-block" }}>
//       {index===16 ?  window.location.pathname === "/edit-exam" ?<div><h2> Update exam successfully.</h2></div>:
//       <div><h2>Exam created successfully.</h2></div> :
//        <div>
//        { window.location.pathname === "/create-exam" ? <h3>CreateExam</h3> : window.location.pathname === "/give-exam"|| window.location.pathname === "/edit-give-exam"?<h3>GiveExam</h3>: <h3>EditExam</h3>}
//         <h2>Question No:- {index}</h2>
//         <Form
//           formAttribute={questionData}
//           handleValue={handleValue}
//           button={button}
//           index={index}
//           prev={prev}
//           next={next}
//           data={data}
//           cloneData={cloneData}
//           popup={popup}
//           pop={pop}

//         />
//        </div>

//     }
//       </div>
//     </div>
//   );
// };

// export default CreateExam;

// import React, { useState, useEffect } from "react";
// import Input from "./Input";
// import checkValidation from "../util/Validated";
// import { valid } from "../util/Validated";
// import Button from "./Button";

// const Form = ({
//   formAttribute,
//   handleValue,
//   button,
//   index,
//   next,
//   prev,
//   data,
//   cloneData,
//   popup,
//   pop
//   // update,
// }) => {
//   const [formValues, setFormValues] = useState({});
//   const [formErrors, setFormErrors] = useState({});
//   const [optionError, setOptionError] = useState(false);

//   useEffect(() => {

//     formAttribute.map((data) =>
//       setFormValues((prv) => ({ ...prv, [data.name]: "" }))
//     );
//     formAttribute.map(
//       (data) =>
//         data.value &&
//         typeof data.value !== "string" &&
//         data.value.map((val) =>
//           typeof val !== "string"
//             ? setFormValues((prv) => ({ ...prv, [val.name]: "" }))
//             : null
//         )
//     );

//   }, []);

//   useEffect(() => {
//     if (Object.keys(cloneData || {})?.length) {
//       setFormValues(cloneData);
//     }
//   }, [cloneData]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//    next&& popup(formValues,name, value)

//     const abc = [
//       formValues.option1,
//       formValues.option2,
//       formValues.option3,
//       formValues.option4,
//     ];

//     let result = false;
//     result = abc.some((e, i) => {
//       return abc.indexOf(e) !== i;
//     });
//     if (result || (abc.includes(value) && value !== "")) {
//       if (result && abc.includes(value) && value !== "") {
//         setOptionError(true);
//       } else {
//         if (result === false) {
//           setOptionError(true);
//         }
//         if (result === true) {
//           setOptionError(false);
//         }
//       }
//       if (name === "answer") {
//         // setOptionError(false)
//         if (result !== true) {
//           setOptionError(false);
//         }
//       }
//     } else {
//       setOptionError(false);
//     }

//     setFormValues({ ...formValues, [name]: value });
//     checkValidation(name, value, formErrors, setFormErrors, formValues);
//   };

//   const reset = (obj) => {
//     const newObj = Object.keys(obj).reduce((accumulator, current) => {
//       accumulator[current] = "";
//       return accumulator;
//     }, {});
//     return newObj;
//   };

//   const reset1 = (obj) => {
//     const newObj = Object.keys(obj).reduce((accumulator, current) => {
//       if (current !== "subjectName") {
//         accumulator[current] = "";
//       }
//       return accumulator;
//     }, {});
//     return newObj;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     valid(formValues, formErrors, setFormErrors);
//     let ddd = Object.values(formErrors);
//     if (ddd.every((s) => s === "")) {
//       handleValue(formValues);
//    console.log("clicking")

//       if (formValues.question === "") {
//         if (formValues.subjectName) {
//           setFormValues(reset1(formValues));
//         } else {
//           setFormValues(reset(formValues));
//         }
//       }

//       if (data.questions[index] === undefined) {
//         if (formValues.subjectName) {
//           setFormValues(reset1(formValues));
//         } else {
//           setFormValues(reset(formValues));
//         }
//       }
//     }
//   };

//   const clear = () => {
//     if (index === 1) {
//       setFormValues(reset(formValues));
//     } else {
//       setFormValues(reset1(formValues));
//     }
//   };

//   const prevClearErrors = () => {
//     setFormErrors(reset(formErrors));
//     setOptionError(false);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>

//         {formAttribute.map((data, i) => {
//           return (
//             <div key={i}>
//               {(() => {
//                 switch (data.type) {
//                   case "radio":
//                     return (
//                       <div>
//                         {data.value.map((ele, i) => {

//                           return (
//                             <div style={{ display: "flex" }} key={i}>

//                             <Input
//                               type="radio"
//                               name={data.name}
//                               onChange={handleChange}
//                               value={
//                                 typeof ele === "string"
//                                   ? ele
//                                   : formValues[ele.name]
//                               }
//                               checked={
//                                 formValues[ele.name] &&
//                                 formValues[ele.name] === formValues.answer
//                               }
//                             />
//                               {typeof ele === "string" ? (
//                                 <label>{ele}</label>
//                               ) : (
//                                 <>

//                                   <Input
//                                     disabled={window.location.pathname === "/give-exam"}
//                                     type={ele.type}
//                                     name={ele.name}
//                                     value={formValues[ele.name] ?? ""}
//                                     placeholder={ele.placeholder}
//                                     onChange={handleChange}
//                                   />

//                                   <p style={{ color: "red" }}>
//                                     {formErrors[ele.name]}
//                                   </p>
//                                 </>
//                               )}
//                             </div>
//                           );
//                         })}
//                         {data.name !== "answer" ? (
//                           <p style={{ color: "red" }}>
//                             {formErrors[data.name]}
//                           </p>
//                         ) : null}
//                         <p style={{ color: "red" }}>
//                           {optionError ? "duplicate option not allow" : null}
//                         </p>
//                       </div>
//                     );

//                   case "dropdown":
//                     return (
//                       <div>
//                         <select
//                           disabled={index !== 1 || window.location.pathname === "/give-exam"}
//                           onChange={handleChange}
//                           name={data.name}
//                           value={formValues[data.name]}
//                         >
//                           <option value="">select subject</option>
//                           {data.options.map((option, i) => {
//                             return (
//                               <option key={i} value={option}>
//                                 {option}
//                               </option>
//                             );
//                           })}
//                         </select>
//                         <p style={{ color: "red" }}>{formErrors[data.name]}</p>
//                       </div>
//                     );
//                   default:

//                     return (
//                       <div>
//                       {window.location.pathname === "/login" || window.location.pathname === "/register"||
//                       window.location.pathname === "/create-exam" ||window.location.pathname === "/edit-exam" ||
//                        (window.location.pathname === "/give-exam" && data.name!=="notes") || (window.location.pathname === "/edit-give-exam" && data.name!=="notes")?
//                       <div>
//                         <Input
//                        label={data.label}
//                        value={
//                          window.location.pathname === "/create-exam" || window.location.pathname === "/edit-exam"
//                            ? formValues[data.name] === "" &&
//                              data.name === "notes"
//                              ? (formValues[data.name] = " ")
//                              : formValues[data.name] ?? ""
//                            : formValues[data.name] ?? ""
//                        }
//                        type={data.type}
//                        name={data.name}
//                        placeholder={data.placeholder}
//                        onChange={handleChange}
//                      />
//                      <p style={{ color: "red" }}>{formErrors[data.name]}</p>

//                       </div>

//                       :null}

//                       </div>
//                     );
//                 }
//               })()}
//             </div>
//           );
//         })}

//         {button &&
//           button.map((child, i) => (
//             <Button
//               key={i}
//               disabled={ child === "prev"
//                   ?   index === 1 ? true: false   :  index===15 || ( window.location.pathname === "/give-exam" &&index===7)||  ( window.location.pathname === "/edit-give-exam" &&index===7)? child==="next" || child==="clear": index <= data.questions.length ? false || (window.location.pathname === "/give-exam" &&child==="clear")||(window.location.pathname === "/edit-give-exam" &&child==="clear"):  child === "next"
//               }
//               children={child}
//               value={child}
//               onClick={
//                 child === "clear"
//                   ? clear
//                   : child === "next"
//                   ? () => {
//                       next();
//                       prevClearErrors();
//                     }
//                   : child === "prev"
//                   ? () => {
//                       prev();
//                       prevClearErrors();
//                     }
//                   : undefined
//               }
//               type={
//                 child === "clear" || child === "next" || child === "prev"
//                   ? "button"
//                   : "submit"
//               }
//             />
//           ))}

//         <Button
//           children={
//             button
//               ? index === 15
//                 ?window.location.pathname === "/edit-exam"? "update":  "create exam"
//                 : index <= data.questions.length
//                 ? window.location.pathname === "/edit-exam"? "update":window.location.pathname === "/create-exam"?"update":
//                 window.location.pathname === "/give-exam" || window.location.pathname === "/edit-give-exam"? index===7?"preview":pop?"add":"skip": "update"
//                 : "add"
//               : "submit"
//           }
//           disabled={window.location.pathname === "/give-exam"&& index<7? true: window.location.pathname === "/edit-give-exam" && index<7?true: false}

//         />
//       </form>
//     </div>
//   );
// };

// export default Form;

// export const valid = (formValues1, formErrors, setFormErrors) => {
//     Object.keys(formValues1).map((key, i) => {
//       if (formValues1[key] === "") {
//         formErrors[key] = `${key}  is required`;
//         setFormErrors({ ...formErrors, [key]: formErrors[key] });
//       }
//     });
//   };

// const editValue = (number) => {
//     let cloneData1 = {};
//     Object.entries(data.questions[number]||{}).map(([key, value], i) => {
//       switch (key) {
//         case "options":
//           cloneData1.option1 = value[0];
//           cloneData1.option2 = value[1];
//           cloneData1.option3 = value[2];
//           cloneData1.option4 = value[3];
//           break;
//         case "question":
//           cloneData1.question = value;
//           break;
//         case "answer":
//           cloneData1.answer = value;
//           break;
//         default:
//           break;
//       }
//     });
//     // data1.data2? setCloneData({...cloneData1,subjectName:data1.data2.subjectName[data1.data2.index].subjectName}) :
//    data1.data1 ?
//         setCloneData({...cloneData1, notes:data1.data1.note[data1.data1.subjectName].notes[number],subjectName:data.subjectName?data.subjectName: data1.data1.note[data1.data1.subjectName].subjectName }):
//           setCloneData({ ...cloneData1, notes: data.notes[number] });
//   };

// useEffect(() => {
//     if (Object.keys(cloneData || {})?.length) {
//       setFormValues(cloneData);
//     }
//   }, [cloneData]);

// {data.name !== "answer" ? (
//     <p style={{ color: "red" }}>
//       {formErrors[data.name]}
//     </p>
//   ) : null}

// *************************************************************************************************************************************************
// table;
import React from "react";

const Table = ({
  data,
  onClick,
  button,
  buttonDelete,
  deleteButton,
  attempt,
  clear,
}) => {
  let keys = data && Array.isArray(data) ? Object.keys(data[0] || {}) : [];
  // const keys = ["_id","notes", "subjectName", "email","Result"];
  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            {window.location.pathname === "/preview-exam" && <th>id</th>}
            {keys?.map((key, i) => {
              return <th key={i}>{key}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 &&
            data.map((value, index) => {
              return (
                <tr key={index}>
                  {window.location.pathname === "/preview-exam" && (
                    <td>{index + 1}</td>
                  )}
                  {keys.map((key, i) => {
                    return (
                      // value[key]===undefined ? null:
                      <React.Fragment key={i}>
                        {Array.isArray(value[key]) ? (
                          window.location.pathname === "/view-exam" ||
                          window.location.pathname === "/all-exam" ||
                          window.location.pathname === "/preview-exam" ? (
                            // typeof Object.values(value[key])[0]==="object"? <>{value[key].length>0 &&(<Table data={value[key]}/>)}</>:  <td>{`${value[key]}`}</td>
                            <td>{`${value[key]}`}</td>
                          ) : (
                            <>
                              {value[key].length > 0 && (
                                <Table data={value[key]} />
                              )}
                            </>
                          )
                        ) : (
                          <td>{value[key]}</td>
                        )}
                      </React.Fragment>
                    );
                  })}
                  {button && (
                    <td style={{ display: "flex" }}>
                      <button
                        value={value._id ? value._id : index}
                        onClick={(e) => onClick(e, index)}
                      >
                        {button}
                      </button>
                      {buttonDelete && (
                        <button value={value._id} onClick={deleteButton}>
                          {buttonDelete}
                        </button>
                      )}
                    </td>
                  )}
                  {attempt && (
                    <td>
                      <button value={value} onClick={(e) => onClick(e, index)}>
                        {attempt}
                      </button>
                      {value.answer === " " ? null : (
                        <button value={value} onClick={(e) => clear(e, index)}>
                          clear
                        </button>
                      )}
                    </td>
                  )}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
