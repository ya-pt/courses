//React 18+
//импортируем библиотеки
import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, createTheme } from '@mui/material/styles'; // позволяет точечно менять стили, изменять тему по умолчанию

// импортируем созданные компоненты
import "./index.css";
import App from "./muiComponents/app";

const theme = createTheme({
  palette: {
    primary: {
      main: '#61dafb'
    },
    secondary: {
      main: '#da61bf'
    }
  }
});

const root = createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> {/* провайдер темы */}
      <App />
    </ThemeProvider>
  </React.StrictMode>
);