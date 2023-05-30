//React 18+
//импортируем библиотеки
import React from "react";
import { createRoot } from "react-dom/client";

// импортируем созданные компоненты
import "./index.css";
import App from "./muiComponents/app";

const root = createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);