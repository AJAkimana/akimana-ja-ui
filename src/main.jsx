import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons/css/boxicons.min.css";
import "aos/dist/aos.css";
import "./styles/style.css";
import { App } from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
