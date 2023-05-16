//React 18
//импортируем библиотеки
import React from "react";
import ReactDOM from "react-dom/client";

// импортируем созданные компоненты 
import MyApp2, {MyApp} from './App'

// (CLASS COMPONENTS)
const app2 = document.querySelector("#app2");
const root2 = ReactDOM.createRoot(app2);
root2.render(<MyApp2 />);

// (FUNCTION COMPONENTS)
const app = document.querySelector("#app");
const root = ReactDOM.createRoot(app);//для управления корневым компонентом вашего приложения
root.render(<MyApp />);
//ReactDOM - обращаемся ко всей html странице и выбираем из нее нужные объекты
//render - что будем помещать(только один родительский тег) в определенный html тег