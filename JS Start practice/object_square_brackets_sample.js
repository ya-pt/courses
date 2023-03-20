//Квадратные скобки используем, когда имя свойства не известно

let user = {
  name: "admin",
  email: "admin.com",
  sayHello: function () {
    console.log("Hello");
  },
};

let propName = prompt("Значение какого свойства вывести - name, email, sayHello ?");

alert(user[propName]); //берется значение свойства
// в итоге будет обращение к свойсву user["name"], user["email"], user["sayHello"]

console.log(user.propName); 
//undefined, так как будет пытаться прочитать свойство, которого не существует