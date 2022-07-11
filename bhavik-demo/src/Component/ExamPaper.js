import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isStudent } from "./function";

const ExamPaper = () => {
  const navigate = useNavigate();
  useEffect(() => {
    isStudent(navigate);
  }, []);
  return <div>ExamPaper</div>;
};

export default ExamPaper;
