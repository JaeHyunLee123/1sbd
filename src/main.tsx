import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Header from "./components/Header.tsx";
import DarkModeBtn from "./components/DarkModeBtn.tsx";
import Footer from "./components/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="w-screen h-screen text-black transition-colors bg-white dark:text-white dark:bg-black">
      <Header />
      <App />
      <Footer />
      <DarkModeBtn />
    </div>
  </StrictMode>
);
