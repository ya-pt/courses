let user = {
  name: "admin",
  email: "admin.com",
  sayHello: function () {
    console.log("Hello");
  },
};

user.name = "test-user"; //устанавливаем для свойства новое значение
user["name"] = "test-user"; //идентичное

console.log(user.name);
console.log(user["name"]); //идентичное