import { createRoot } from "react-dom/client";
import "./index.css";
import AppProvider from "./App.tsx";

createRoot(document.getElementById("root")!).render(<AppProvider />);
