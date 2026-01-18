import { Route, Routes } from "react-router";
import "./app.css";
import SignUp from "./features/auth/pages/SignUpPage";
import Home from "./app/home/Home";
import Dashboard from "./app/dashboard/Dashboard";
import { RequireAuth } from "./features/auth/guards/RequireAuth";
import LoginPage from "./features/auth/pages/LoginPage";
import ResetPasswordPage from "./features/auth/pages/ResetPasswordPage";
import ConfirmEmailPage from "./features/auth/pages/ConfirmEmailPage";
import { ToastContainer } from "react-toastify";
import { AuthNotifications } from "./shared/hooks/AuthNotifications";

export function App() {
  return (
    <>
      <AuthNotifications />
      <Routes>
        <Route path="/auth/login" element={<LoginPage />}></Route>
        <Route path="/auth/signup" element={<SignUp />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/auth/set-protected"
          element={<ConfirmEmailPage />}
        ></Route>
        <Route
          path="/auth/reset-password"
          element={<ResetPasswordPage />}
        ></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}
