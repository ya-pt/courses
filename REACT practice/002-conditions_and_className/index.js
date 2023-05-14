//React

//ReactDOM - обращаемся ко всей html странице и выбираем из нее нужные объекты
//render - что будем помещать(только один родительский тег) в определенный html тег
// JSX является частью библиотеки React.

const helpText = "help text !";
const elements = (
  <div className="thisIsClass">
    <h1>{helpText}</h1>
    
    {/* conditions */}
    <p>{helpText == "help text !" ? "yes" : "no"}</p> {/* yes */}
    <p>{helpText == "help text" ? "yes" : "no"}</p> {/* no */}
  </div>
);
const app = document.querySelector("#app");

ReactDOM.render(elements, app);

// В React для определения класса CSS в элементе используется атрибут className вместо class.
// Это сделано для того, чтобы избежать конфликта с зарезервированным ключевым словом class в JavaScript.