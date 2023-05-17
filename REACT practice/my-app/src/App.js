//React 18
//импортируем библиотеки
import React from "react";

//компоненты
import Header from "./components/Header";
import Header2 from "./components/Header2";

//картинки
import logo from "./img/logo.png"


// (FUNCTION COMPONENTS)-------------------------------------------------------------------------------------------

function MyApp() {// должно начинаться с заглавной буквы
  const helpText = "help text !";

  return (
    <div className="thisIsClass">
      <Header title='"TITLE"'/>
      <Header />
      <Header />

      <h1>{helpText}</h1>
      {/* conditions */}
      <p>{helpText === "help text !" ? "yes" : "no"}</p> {/* yes */}
      <p>{helpText === "help text" ? "yes" : "no"}</p> {/* no */}
      
      <img src={logo} alt=""></img>
    </div>
  );
}
// В React для определения класса CSS в элементе используется атрибут className вместо class.



// (CLASS COMPONENTS)-------------------------------------------------------------------------------------------

class MyApp2 extends React.Component{
  // в классовых компонентах создаем значения без переменных, обращаемся через this.
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

  inputClick(){console.log("clicked")};
  mouseOver(){console.log("mouse")};
}


//экспортируем чтобы импортировать
export default MyApp2
export {MyApp}