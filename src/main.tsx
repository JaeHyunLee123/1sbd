import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="w-screen h-screen text-black transition-colors bg-white dark:text-white dark:bg-black">
      <App />
    </div>
  </StrictMode>
);
