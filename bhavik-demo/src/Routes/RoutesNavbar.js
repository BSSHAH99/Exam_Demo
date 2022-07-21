import React from "react";
import { Routes } from "react-router-dom";
import ForgotPassword from "../Component/User/ForgotPassword";
import Home from "../Component/Home";
import Login from "../Component/User/Login";
import NewPassword from "../Component/User/NewPassword";
import NoMatch from "../Component/NoMatch";
import ResetPassword from "../Component/User/ResetPassword";
import SignUp from "../Component/User/SignUp";
import StudentForExam from "../Component/Teacher/VerifiedStudent";
import TeacherDeshbord from "../Component/Teacher/TeacherDeshbord";
import { mapRoute } from "./FunctionRouteMap";
import StudentDetail from "../Component/Teacher/StudentDetail";
import CreateExam from "../Component/Teacher/CreateExam";
import ViewExam from "../Component/Teacher/ViewExam";
import ViewExamDetail from "../Component/Teacher/ViewExamDetail";
import EditExam from "../Component/Teacher/EditExam";
import AllExamStudent from "../Component/Student/AllExamStudent";
import ExamPaper from "../Component/Student/ExamPaper";
import StudentProfile from "../Component/Student/StudentProfile";
import EditStudentProfile from "../Component/Student/EditStudentProfile";

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
      goto: <CreateExam isEdit />,
      // goto: <EditExam />,
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
