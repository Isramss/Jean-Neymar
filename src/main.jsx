import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/Jean-Neymar">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// basename="/Jean-Neymar"