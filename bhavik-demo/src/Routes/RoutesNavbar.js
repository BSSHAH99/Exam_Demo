import React from "react";
import { Routes } from "react-router-dom";
import ForgotPassword from "../Component/ForgotPassword";
import Home from "../Component/Home";
import Login from "../Component/Login";
import NewPassword from "../Component/NewPassword";
import NoMatch from "../Component/NoMatch";
import ResetPassword from "../Component/ResetPassword";
import SignUp from "../Component/SignUp";
import StudentForExam from "../Component/VerifiedStudent";
import TeacherDeshbord from "../Component/TeacherDeshbord";
import { mapRoute } from "./FunctionRouteMap";
import StudentDetail from "../Component/StudentDetail";
import CreateExam from "../Component/CreateExam";
import ViewExam from "../Component/ViewExam";
import ViewExamDetail from "../Component/ViewExamDetail";
import EditExam from "../Component/EditExam";
import DeleteExam from "../Component/DeleteExam";
import AllExamStudent from "../Component/AllExamStudent";
import ExamPaper from "../Component/ExamPaper";
import StudentProfile from "../Component/StudentProfile";
import EditStudentProfile from "../Component/EditStudentProfile";

const RoutesNavbar = () => {
  const n = [
    {
      path: "/signup",
      goto: <SignUp />,
      requireAuth: false,
    },
    {
      path: "/login",
      goto: <Login />,
      requireAuth: false,
    },
    {
      path: "/ForgotPassword",
      goto: <ForgotPassword />,
      requireAuth: false,
    },
    {
      path: "/newPassword",
      goto: <NewPassword />,
      requireAuth: false,
    },
    {
      path: "/resetPassword",
      goto: <ResetPassword />,
      requireAuth: true,
    },
    {
      path: "/",
      goto: <Home />,
      requireAuth: true,
    },
    {
      path: "/teacher-deshbord",
      goto: <TeacherDeshbord />,
      requireAuth: true,
    },
    {
      path: "/verified-student",
      goto: <StudentForExam />,
      requireAuth: true,
    },
    {
      path: "/student-detail/",
      goto: <StudentDetail />,
      requireAuth: true,
    },
    {
      path: "/student-deshbord",
      goto: <AllExamStudent />,
      requireAuth: true,
    },
    {
      path: "/create-exam",
      goto: <CreateExam />,
      requireAuth: true,
    },
    {
      path: "/view-exam",
      goto: <ViewExam />,
      requireAuth: true,
    },
    {
      path: "/exam-detail/",
      goto: <ViewExamDetail />,
      requireAuth: true,
    },
    {
      path: "/edit-exam/",
      goto: <CreateExam />,
      // goto: <EditExam />,
      requireAuth: true,
    },
    {
      path: "/abcd/",
      goto: <EditExam />,
      requireAuth: true,
    },
    {
      path: "/delete-exam/",
      goto: <DeleteExam />,
      requireAuth: true,
    },
    {
      path: "/student-deshbord",
      goto: <AllExamStudent />,
      requireAuth: true,
    },
    {
      path: "/exam-paper/",
      goto: <ExamPaper />,
      requireAuth: true,
    },
    {
      path: "/student-profile",
      goto: <StudentProfile />,
      requireAuth: true,
    },
    {
      path: "/student-profile-edit",
      goto: <EditStudentProfile />,
      requireAuth: true,
    },
    {
      path: "*",
      goto: <NoMatch />,
      // requireAuth : true
    },
  ];
  return <Routes>{mapRoute(n)}</Routes>;
};

export default RoutesNavbar;

// newPassword
