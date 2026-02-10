import "./app.css";
import { ToastContainer } from "react-toastify";
import { AuthNotifications } from "./shared/hooks/AuthNotifications";
import { Outlet } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";

export function App() {
  return (
    <>
      <ErrorBoundary>
        <AuthNotifications />
        <Outlet />
        <ToastContainer />
      </ErrorBoundary>
    </>
  );
}
