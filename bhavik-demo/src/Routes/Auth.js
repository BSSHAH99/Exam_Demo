import { useState, createContext, useContext } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [uname, setuname] = useState(localStorage.getItem("uname") || null);

  const login = (uname, token) => {
    localStorage.setItem("uname", uname);
    localStorage.setItem("token", token);
    setuname(uname);
  };

  const logout = (uname) => {
    localStorage.removeItem("token");
    localStorage.removeItem("uname");
    setuname(null);
  };
  return (
    <AuthContext.Provider value={{ uname, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
