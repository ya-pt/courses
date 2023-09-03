//ReactDOM - обращаемся ко всей html странице и выбираем из нее нужные объекты
//render - что будем помещать(только один родительский тег) в определенный html тег

ReactDOM.render(
  // родительский тег
  <div>
    <h1>hi</h1>
    <h2>how are you like?</h2>
  </div>,
  document.querySelector("#app")
);

// JSX
// (JavaScript XML) - это расширение синтаксиса JavaScript,
// которое позволяет писать HTML-подобный код прямо внутри JavaScript.
// JSX является частью библиотеки React.

// без  JSX синтаксиса
ReactDOM.render(
  React.createElement("input", {
    placeholder: "help text",
    onClick: () => console.log("clicked"), //обработчик события, в отличии от чистого js, пишем следующее слово в верхнем регистре
    onMouseEnter: () => console.log("mouse"),
  }),
  document.querySelector("#input")
);

// с JSX синтаксисом
ReactDOM.render(
  <input
    placeholder="help text"
    onClick={() => console.log("clicked")}
    onMouseEnter={() => console.log("mouse")}
  />,
  document.querySelector("#inputJsx")
);


//все значения можно помещать в различные переменные

// В React порядок объявления функций имеет значение.
//Функции компонентов не поднимаются (не hoist) в React. Таким образом, функциональный компонент должен быть определен перед его использованием.
const inputClick = () => console.log("clicked");
const inputMouse = () => console.log("mouse");

const helpText = "help text !";
const elements = (
  <div>
    <h1>{helpText}</h1>
    <input placeholder={helpText} onClick={inputClick} onMouseEnter={inputMouse}/>
  </div>
);

const variable = document.querySelector("#inputVariable");

ReactDOM.render(elements, variable);