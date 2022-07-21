import logo from "./logo.svg";
// import "./App.css";
import { BrowserRouter } from "react-router-dom";

import RoutesNavbar from "./Routes/RoutesNavbar";
import Navbar from "./Routes/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { toastClear } from "./Redux/action/toastAction";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.toastReducer);
  const message = myState.message;

  const handleTostify = (msg) => {
    msg.statusCode === 200
      ? toast.success(message.message)
      : toast.error(message.message);
  };

  useEffect(() => {
    dispatch(toastClear());
  });

  useEffect(() => {
    myState?.message?.message && handleTostify(myState?.message);
  }, [myState]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <RoutesNavbar />
        <ToastContainer></ToastContainer>
      </BrowserRouter>
    </div>
  );
}

export default App;
