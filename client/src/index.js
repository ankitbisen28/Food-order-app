import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../src/assets/bootstrap/bootstrap.min.css"
import "../src/assets/css/style.min.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
