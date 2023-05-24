import React, {useState, useEffect} from "react";

// (FUNCTION COMPONENTS)
// Хуки - автоматически выполняют некоторые действия, позволяют использовать все возможности React без написания классовых компонентов

// useState() - принимает на вход начальное состояние и возвращает массив из двух значений: текущего значения состояния и функции, которая обновляет состояние.
// useEffect() - будет выполняться после каждого render и обновления

const FunButton = (props) =>{
    const [click, setClick] = useState(0) //setClick-вторая переменная, которая является функцией

    useEffect(() => {
        document.title = `clicked ${click}`//после каждого render и обновления меняется подстраивая значение
    })

    return(
        //при click вызываем анонимную функцию
        <button onClick={() => setClick(click + 1)}>
            {props.text}{click}
        </button>// props(является ссылкой на объект, содержащий все переданные свойства)
    )
}

//если внутрь компонента значение не передано, будет использоваться значение по default
FunButton.defaultProps = {
    text: "кнопка"
    // значение по умолчанию
}

export default FunButton