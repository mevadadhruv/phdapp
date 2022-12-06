import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./index.css";

const container1 = document.getElementById("root");
const header = createRoot(container1);
header.render(<App />);
// createRoot(container!) if you use TypeScript
