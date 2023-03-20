let user = {
  name: "admin",
  email: "admin.com",
  sayHello: function () {
    console.log("Hello");
  },
};

console.log(user.name);
console.log(user.email);

console.log(user.foo); //при вызове несуществующего свойства, получаем undefined

delete user.email; //удаляем свойство из объекта

console.log(user.name);
console.log(user.email); //undefined
console.log(user.foo); //undefined
