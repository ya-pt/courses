//Если в качестве значения свойство хранит функцию, то такое свойство называется методом
//Метод - функция, которая принадлежит объекту

let user = {
  //свойства
  name: "admin",
  email: "admin.com",
  //метод
  sayHello: function () {
    console.log("Hello");
  },
};

console.log(user.name);
console.log(user.email);

user.sayHello(); //вызов метода
