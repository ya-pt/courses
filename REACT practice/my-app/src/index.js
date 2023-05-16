//React 18
//импортируем библиотеки
import React from "react";
import ReactDOM from "react-dom/client";


// (FUNCTION COMPONENTS)-------------------------------------------------------------------------------------------

const helpText = "help text !";

// Component 2
function Header(){
  return(
    <header>header</header>
  )
}

// Component 1
function MyApp() {// должно начинаться с заглавной буквы
  return (
    <div className="thisIsClass">
      <Header />
      <Header />
      <Header />

      <h1>{helpText}</h1>
      {/* conditions */}
      <p>{helpText === "help text !" ? "yes" : "no"}</p> {/* yes */}
      <p>{helpText === "help text" ? "yes" : "no"}</p> {/* no */}
      <span>___________________</span>
    </div>
  );
}
// В React для определения класса CSS в элементе используется атрибут className вместо class.

const app = document.querySelector("#app");

const root = ReactDOM.createRoot(app);//для управления корневым компонентом вашего приложения
root.render(<MyApp />);

//ReactDOM - обращаемся ко всей html странице и выбираем из нее нужные объекты
//render - что будем помещать(только один родительский тег) в определенный html тег




// (CLASS COMPONENTS)-------------------------------------------------------------------------------------------

class Header2 extends React.Component{ // наследуются от базового класса React.Component
  render(){ // функция(метод класса)
    return(
      // props является ссылкой на объект, содержащий все переданные свойства
      <header>{this.props.title}</header>
    )
  }
}

class MyApp2 extends React.Component{
  text = "click or mouse"
  render(){
    return(<div>
    <Header2 title="шапка сайта"/>{/*Свойство*/}
    <Header2 title="header"/>{/*Свойство*/}
    <Header2 title="шапка/header"/>{/*Свойство*/}

    {/* this. используется для доступа к объектам, которые определены внутри класса  */}
    <h1>{this.text}</h1>
    <input placeholder={this.text} onClick={this.inputClick} onMouseEnter={this.mouseOver}></input>
  </div>)
  }

  inputClick(){console.log("clicked")}
  mouseOver(){console.log("mouse")}
}

const app2 = document.querySelector("#app2");
const root2 = ReactDOM.createRoot(app2);
root2.render(<MyApp2 />);