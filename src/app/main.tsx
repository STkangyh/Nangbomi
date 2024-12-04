import { createRoot } from "react-dom/client";
import "./index.css";
import AppProvider from "./App";

createRoot(document.getElementById("root")!).render(<AppProvider />);
