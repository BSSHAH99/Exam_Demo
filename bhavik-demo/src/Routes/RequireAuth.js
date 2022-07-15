import { Navigate, useLocation } from "react-router-dom";
import { isExpired } from "react-jwt";

function RequireAuth({ children }) {
  const accessToken = localStorage.getItem("access-token");
  const isMyTokenExpired = isExpired(accessToken);
  const location = useLocation();

  if (localStorage.getItem("access-token")) {
    if (isMyTokenExpired) {
      localStorage.clear();
    } else {
      return children;
    }
  } else {
    return <Navigate replace to="/login" state={{ path: location.pathname }} />;
  }

  // if (!localStorage.getItem("access-token")) {
  //   return <Navigate replace to="/login" state={{ path: location.pathname }} />;
  // }
  // return children;
}

export default RequireAuth;
