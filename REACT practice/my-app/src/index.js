//React 18+
//импортируем библиотеки
import React from "react";
import { createRoot } from "react-dom/client";

// импортируем созданные компоненты
import ClassCompMyApp2, { FunCompMyApp, ClassAppStates, FunAppStates} from "./componentBlocks/App";
import AppUsersList from "./componentBlocks/AppUsersList";
import "./css/main.css"; //подключение стилей ко всему проекту

// (FUNCTION COMPONENTS)

const root = createRoot(document.querySelector("#funCompMyApp")); //управление корневым компонентом вашего приложения
root.render(
  // render - что будем помещать(только один родительский тег) в определенный html тег
  <React.StrictMode>
    {/* включает строгий режим */}
    <FunCompMyApp />
  </React.StrictMode>
);

const root4 = createRoot(document.querySelector("#funAppStates"));
root4.render(
  <React.StrictMode>
    <FunAppStates/>
  </React.StrictMode>
)



// (CLASS COMPONENTS)

const root2 = createRoot(document.querySelector("#classCompMyApp2"));
root2.render(
  <React.StrictMode>
    <ClassCompMyApp2 />
  </React.StrictMode>
);

const root3 = createRoot(document.querySelector("#classAppStates"));
root3.render(
  <React.StrictMode>
    <ClassAppStates/>
  </React.StrictMode>
);



// (another COMPONENTS...)
// .tsx
// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const rootListUsers = createRoot(document.querySelector("#listUsers"));
rootListUsers.render(
  <React.StrictMode>
    <AppUsersList/>
  </React.StrictMode>
);