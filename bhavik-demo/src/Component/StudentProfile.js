import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setStudentData,
  setStudentProfile,
} from "../Redux/action/editStudentProfile";
import { studentProfileRequest } from "../Redux/action/studentProfile";
import EditStudentProfile from "./EditStudentProfile";
import { isStudent } from "./function";
import DemoButton from "./ReusableComponents/DemoButton";
import DemoTable from "./ReusableComponents/DemoTable";
import Loading from "./ReusableComponents/Loading";
import Table from "./ReusableComponents/Table";

const StudentProfile = () => {
  const navigate = useNavigate();

  const [showEdit, setShowEdit] = useState(false);

  const myState = useSelector((state) => state.studentProfileReducer);
  const student = myState.student;

  let tableData = Object.values(student || {});
  const dispatch = useDispatch();

  useEffect(() => {
    isStudent(navigate);
    dispatch(studentProfileRequest());
  }, []);

  const onEdit = (e, index, id) => {
    // console.log("e, index, data._id :>> ", id);
    dispatch(setStudentData({ name: student.name }));
    // setShowEdit(true);
    navigate("/student-profile-edit");
  };
  console.log("student :>> ", student);

  Object.entries(student).map(([key, values]) => {
    console.log("key,values :>> ", key, values);
  });

  return (
    <>
      <div className="container my-3">
        <div className="container">
          {myState.loading ? (
            <Loading></Loading>
          ) : (
            <table className="table">
              <tbody>
                {Object.entries(student).map(([key, values]) => {
                  return (
                    <tr>
                      <th scope="col">{key.toUpperCase()}</th> :.
                      <td>{values}</td>
                      {key === "name" ? (
                        <DemoButton onClick={onEdit}>Edit</DemoButton>
                      ) : null}
                      {/* {key === "name" ? (
                        showEdit === true ? (
                          <EditStudentProfile></EditStudentProfile>
                        ) : null
                      ) : null} */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
