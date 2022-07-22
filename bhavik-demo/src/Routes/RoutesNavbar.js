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
      component: <SignUp />,
      requireAuth: false,
    },
    {
      path: "/login",
      component: <Login />,
      requireAuth: false,
    },
    {
      path: "/ForgotPassword",
      component: <ForgotPassword />,
      requireAuth: false,
    },
    {
      path: "/newPassword",
      component: <NewPassword />,
      requireAuth: false,
    },
    {
      path: "/resetPassword",
      component: <ResetPassword />,
      requireAuth: true,
    },
    {
      path: "/",
      component: <Home />,
      requireAuth: true,
    },
    {
      path: "/teacher-deshbord",
      component: <TeacherDeshbord />,
      requireAuth: true,
    },
    {
      path: "/verified-student",
      component: <StudentForExam />,
      requireAuth: true,
    },
    {
      path: "/student-detail/",
      component: <StudentDetail />,
      requireAuth: true,
    },
    {
      path: "/student-deshbord",
      component: <AllExamStudent />,
      requireAuth: true,
    },
    {
      path: "/create-exam",
      component: <CreateExam />,
      requireAuth: true,
    },
    {
      path: "/view-exam",
      component: <ViewExam />,
      requireAuth: true,
    },
    {
      path: "/exam-detail/",
      component: <ViewExamDetail />,
      requireAuth: true,
    },
    {
      path: "/edit-exam/",
      component: <CreateExam isEdit />,
      // component: <EditExam />,
      requireAuth: true,
    },
    {
      path: "/student-deshbord",
      component: <AllExamStudent />,
      requireAuth: true,
    },
    {
      path: "/exam-paper/",
      component: <ExamPaper />,
      requireAuth: true,
    },
    {
      path: "/student-profile",
      component: <StudentProfile />,
      requireAuth: true,
    },
    {
      path: "/student-profile-edit",
      component: <EditStudentProfile />,
      requireAuth: true,
    },
    {
      path: "*",
      component: <NoMatch />,
      // requireAuth : true
    },
  ];
  return <Routes>{mapRoute(n)}</Routes>;
};

export default RoutesNavbar;
