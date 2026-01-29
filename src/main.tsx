import "../src/features/auth/store/auth.listener.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import "./index.scss";

import { createRoot } from "preact/compat/client";

createRoot(document.getElementById("app")!).render(
  <RouterProvider router={router} />,
);
