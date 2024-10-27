import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = document.getElementById("root");
root &&
  createRoot(root).render(
    <StrictMode>
      <ToastContainer />
      <App />
    </StrictMode>,
  );
