import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import "./index.scss";
import { render } from "preact";

render(<RouterProvider router={router} />, document.getElementById("app")!);
