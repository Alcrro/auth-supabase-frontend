import "./app.css";
import { ToastContainer } from "react-toastify";
import { AuthNotifications } from "./shared/hooks/AuthNotifications";
import { Outlet } from "react-router-dom";

export function App() {
  return (
    <>
      <AuthNotifications />
      <Outlet />
      <ToastContainer />
    </>
  );
}
