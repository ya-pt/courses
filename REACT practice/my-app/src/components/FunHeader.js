import React from "react";

// (FUNCTION COMPONENTS)
function FunHeader(props){
  return(
    <header className="header">{props.title}</header>
  );
}

//если внутрь компонента значение не передано, будет использоваться значение по default
FunHeader.defaultProps = {
  title: "header"
  // значение по умолчанию
}

export default FunHeader