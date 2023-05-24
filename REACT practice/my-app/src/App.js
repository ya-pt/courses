import React from "react";
import { useState } from 'react';

//компоненты
import Header from "./components/Header";
import Header2 from "./components/Header2";
import FunButton from "./components/FunButton";
import ClassButton from "./components/ClassButton"

//картинки
import logo from "./img/logo.png";

// (FUNCTION COMPONENTS)-------------------------------------------------------------------------------------------

function FunCompMyApp() {
  // должно начинаться с заглавной буквы
  const helpText = "REACT 18+";

  return (
    <div className="thisIsClass">
      <Header title='"(FUNCTION COMPONENTS)"' />
      <Header/>
      <Header/>

      <FunButton text="button"/>
      <FunButton/>
      <h1>{helpText}</h1>
      {/* conditions */}
      <p>{helpText === "REACT 18+" ? "yes" : "no"}</p> {/* yes */}
      <p>{helpText === "help text" ? "yes" : "no"}</p> {/* no */}
      <img src={logo} alt=""></img>{/* import logo */}
    </div>
  );
}
// В React для определения класса CSS в элементе используется атрибут className вместо class.

// (CLASS COMPONENTS)-------------------------------------------------------------------------------------------

class ClassCompMyApp2 extends React.Component {
  // в классовых компонентах создаем значения без переменных, обращаемся через this.
  text = "click or mouse";
  render() {
    return (
      <div className="thisIsClass">
        <Header2 title="(CLASS COMPONENTS)" />
        <Header2 title="header" />
        <Header2 title="шапка/header" />

        <ClassButton/>
        <ClassButton text="btn"/>

        {/* this. используется для доступа к объектам, которые определены внутри класса  */}
        <h1>{this.text}</h1>
        <input
          placeholder={this.text}
          onClick={this.inputClick}
          onMouseEnter={this.mouseOver}
        ></input>
      </div>
    );
  }

  inputClick() {
    console.log("clicked");
  }
  mouseOver() {
    console.log("mouse");
  }
}

// (CLASS STATES)-------------------------------------------------------------------------------------------

// constructor - основан на классах
class ClassAppStates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //указываем изначальное состояние элементов
      // в классовых компонентах создаем значения без переменных (обращаемся через this)
      text: "click states here",
      userData: ""
    };

    this.inputClick = this.inputClick.bind(this)// bind() - позволяет взаимодействовать "нашим собственным методам" с состояниями
  }

  render() {
    return (
      <div className="classAppStates">
        {/* this. используется для доступа к объектам, которые определены внутри класса  */}
        <h1>{this.state.text}</h1>
        <h2>{this.state.userData}</h2>
        <input
          placeholder={this.state.text}

          // default events
          onChange={event => this.setState({userData: event.target.value})}
          // свойство target - позволяет взаимодействовать с элементом, на котором произошло событие
          onClick={this.inputClick}
          onMouseEnter={this.mouseOver}
        ></input>
      </div>
    );
  }

  inputClick() {
    this.setState({text: "changed"}) // this.setState() - метод для изменения состояния
    console.log("clicked");
  }
  mouseOver() {
    console.log("mouse");
  }
}

// (FUNCTION STATES)-------------------------------------------------------------------------------------------

function FunAppStates() {
  const [text, setText] = useState("click states here");
  const [userData, setUserData] = useState("");

  const inputClick = () => {
    setText("changed");
    console.log("clicked");
  };

  const mouseOver = () => {
    console.log("mouse");
  };

  return (
    <div className="funAppStates">
      <h1>{text}</h1>
      <h2>{userData}</h2>
      <input
        placeholder={text}
        onChange={(event) => setUserData(event.target.value)}//параметр event добавлен для получения дополнительных значений
        onClick={inputClick}
        onMouseEnter={mouseOver}
      ></input>
    </div>
  );
}


//экспортируем чтобы импортировать
export default ClassCompMyApp2;
export { FunCompMyApp };
export { ClassAppStates };
export { FunAppStates };