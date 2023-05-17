//React 18
//импортируем библиотеки
import React from "react";

// (FUNCTION COMPONENTS)
function Header(props){
    return(
      <header className="header">{props.title} header</header>
    );
}

export default Header