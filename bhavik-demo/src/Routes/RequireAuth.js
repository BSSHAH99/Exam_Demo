import { Navigate, useLocation } from "react-router-dom";
import { isExpired } from "react-jwt";

function RequireAuth({ children }) {
  const accessToken = localStorage.getItem("access-token");
  const isMyTokenExpired = isExpired(accessToken);
  // console.log("isMyTokenExpired :>> ", isMyTokenExpired);
  const location = useLocation();
  if (
    isMyTokenExpired === true ||
    !localStorage.getItem("access-token")
    // || localStorage.getItem("token") != "eyJr389hbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
  ) {
    return <Navigate replace to="/login" state={{ path: location.pathname }} />;
  }
  return children;
}

export default RequireAuth;
