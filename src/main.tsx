import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="text-black bg-white w-screen h-screen dark:text-white dark:bg-black">
      <App />
    </div>
  </StrictMode>
);
