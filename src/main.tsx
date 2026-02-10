import "../src/features/auth/store/auth.listener.ts";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import "./index.scss";

import { createRoot } from "preact/compat/client";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("app")!).render(
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>,
);
