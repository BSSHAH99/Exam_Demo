import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import DemoButton from "../Component/ReusableComponents/DemoButton";

const Navbar = () => {
  const navigate = useNavigate();
  // function LogOut(navigate) {
  //   localStorage.clear(), navigate("/login");
  // }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"></Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link> */}
              </li>

              {/* {!localStorage.getItem("token") ||
                (localStorage.getItem("token") !=
                  "eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" && (
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                ))} */}

              {/* {!localStorage.getItem("token1") ? (
                <li className="nav-item">
                  <Link className="nav-link" to="/jwt">
                    JWT
                  </Link>
                </li>
              ) : null} */}

              {!localStorage.getItem("access-token") && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">
                      SignUp
                    </Link>
                  </li>
                </>
              )}

              {localStorage.getItem("role") === "teacher" && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/teacher-deshbord">
                      Deshbord
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/verified-student">
                      Verified Student
                    </Link>
                  </li>
                  {/* <li className="nav-item">
                    <Link className="nav-link" to="/create-exam">
                      Create Exam
                    </Link>
                  </li> */}
                  <li className="nav-item">
                    <Link className="nav-link" to="/view-exam">
                      Exam
                    </Link>
                  </li>
                </>
              )}

              {localStorage.getItem("role") === "student" && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/student-deshbord">
                      Deshbord
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/student-profile">
                      Student Profile
                    </Link>
                  </li>
                </>
              )}

              {localStorage.getItem("access-token") && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/resetPassword">
                      Reset Password
                    </Link>
                  </li>

                  <div className="mx-3">
                    <DemoButton
                      onClick={() => {
                        navigate("/login");
                        localStorage.clear();
                      }}
                    >
                      LogOut
                    </DemoButton>
                  </div>
                </>
              )}

              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Hooks
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/setstate">
                      setState
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/hooks">
                      useState With Previous State
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/useEffectvruseMemo">
                      useEffect Vr useMemo
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/usecallback">
                      useCallback
                    </Link>
                  </li>
                </ul>
              </li> */}
            </ul>

            {/* <div className="mx-3">
              <DemoButton onClick={() => navigate(-1)}>Go Back</DemoButton>
            </div> */}
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
