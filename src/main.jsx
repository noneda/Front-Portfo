import "./base.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import Router from "./Router";

const root = document.getElementById("root");

createRoot(root).render(<RouterProvider router={Router} />);
