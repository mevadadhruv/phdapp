import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const container1 = document.getElementById("root");
const header = createRoot(container1);
header.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
// createRoot(container!) if you use TypeScript
