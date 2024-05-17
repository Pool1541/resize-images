import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@material-tailwind/react/context/theme.js";
import AppRouter from "./router.jsx";
import "./index.css";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>
);
