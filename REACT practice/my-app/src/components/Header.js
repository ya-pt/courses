import React from "react";

// (FUNCTION COMPONENTS)
function Header(props){
    return(
      <header className="header">{props.title}</header>
    );
}

//если внутрь компонента значение не передано, будет использоваться значение по default
Header.defaultProps = {
  title: "header"
  // значение по умолчанию
}

export default Header