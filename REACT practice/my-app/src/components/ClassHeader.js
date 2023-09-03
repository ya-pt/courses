import React from "react";

// (CLASS COMPONENTS)
class ClassHeader extends React.Component{ // наследуются от базового класса React.Component
    render(){ // функция(метод класса)
      return(
        // this(этот класс), содержит props(является ссылкой на объект, содержащий все переданные свойства)
        <header className="header">{this.props.title}</header>
      )
    }
}

export default ClassHeader