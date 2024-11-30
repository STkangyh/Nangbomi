import { createRoot } from "react-dom/client";
import "./index.css";
import AppProvider from "./App.tsx";
import { BrowserRouter } from "react-router";
import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {},
  onoffline() {},
});

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <AppProvider />
  </BrowserRouter>
);
