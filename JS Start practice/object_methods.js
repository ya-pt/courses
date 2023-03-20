let user = new Object();

//свойства
user.name = "admin";
user.email = "admin.com";

//метод
user.sayHello = function () {
  console.log("Hello");
};

console.log(user.name);
console.log(user.email);

user.sayHello(); //вызов метода

console.log(user);