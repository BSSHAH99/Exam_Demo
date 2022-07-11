const createExamFields = [
  {
    name: "subjectName",
    type: "text",
    placeholder: "Enter Subject Name",
    // disabled: false,
  },
  // {
  //   type: "dropdown",
  //   name: "subjectName",
  //   label: "subjectName",
  //   options: [
  //     "C",
  //     "C++",
  //     "Php",
  //     "Python",
  //     "Angular",
  //     "React js",
  //     "JS",
  //     "C#",
  //     "JAVA",
  //   ],
  //   placeholder: "subjectName",
  // },
  {
    name: "question",
    type: "text",
    placeholder: "enter question",
  },
  {
    type: "radio",
    name: "answer",
    value: [
      {
        type: "text",
        name: "option1",
        placeholder: "option1",
      },
      {
        type: "text",
        name: "option2",
        placeholder: "option2",
      },
      {
        type: "text",
        name: "option3",
        placeholder: "option3",
      },
      {
        type: "text",
        name: "option4",
        placeholder: "option4",
      },
    ],
  },
  {
    lable: "answer",
    type: "text",
    name: "answer",
    disabled: "disabled",
    placeholder: "answer",
  },
  {
    label: "Note:-",
    type: "text",
    name: "notes",
    placeholder: "notes",
  },
];

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
export default createExamFields;
