import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <div className="text-black transition-colors bg-white  dark:text-white dark:bg-black">
        <Header />
        <App />
        <Footer />
      </div>
    </Provider>
  </StrictMode>
);
