//В объекте может находиться вложенный объект

//Использование литералов
//если заранее известны свойства

let user1 = {
  name: "admin",
  email: "admin.com",

  //Свойство address в котором находится объект
  address: {
    city: "London",
    street: "Uxbridge Rd",
    building: "7",
  },
};

console.log(user1.name);
console.log(user1.address.city);

//использования конструктора object
//если свойства заранее не известны

let user2 = new Object();
user2.name = "admin";
user2.email = "admin.com";

user2.address = new Object();
user2.address.city = "London";
user2.address.street = "Uxbridge Rd";
user2.address.building = "7";

console.log(user2.name);
console.log(user2.address.city);