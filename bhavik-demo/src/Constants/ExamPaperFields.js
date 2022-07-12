const ExamPaperFields = [
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
];

export default ExamPaperFields;
