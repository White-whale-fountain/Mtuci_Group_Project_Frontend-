import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/global.css";
import Routes from "./routes/Routes";
import { AuthProvider } from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Routes />
  </AuthProvider>
);
