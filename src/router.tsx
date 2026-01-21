import { createBrowserRouter } from "react-router-dom";
import Home from "./app/home/Home";
import LoginPage from "./features/auth/pages/LoginPage";
import Dashboard from "./app/dashboard/Dashboard";
import { requireAuth } from "./features/auth/guards/requireAuth";
import { App } from "./app";
import SignUpPage from "./features/auth/pages/SignUpPage";
import ConfirmEmailPage from "./features/auth/pages/ConfirmEmailPage";
import ResetPasswordPage from "./features/auth/pages/ResetPasswordPage";

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/auth/login",
        element: <LoginPage />,
      },

      {
        path: "/auth/signup",
        element: <SignUpPage />,
      },
      {
        path: "/auth/set-protected",
        element: <ConfirmEmailPage />,
      },
      {
        path: "/auth/reset-password",
        element: <ResetPasswordPage />,
      },

      {
        path: "/dashboard",
        loader: requireAuth,
        element: <Dashboard />,
      },
    ],
  },
]);
