//React 18
//импортируем библиотеки
import React from "react";

class Header2 extends React.Component{ // наследуются от базового класса React.Component
    render(){ // функция(метод класса)
      return(
        // props является ссылкой на объект, содержащий все переданные свойства
        <header>{this.props.title}</header>
      )
    }
}

export default Header2