//Свойство - значение которое храниться в объекте

let user = new Object();

//Если несуществующему свойству присвоить значение, то это свойство будет создано в объекте

user.name = "admin"; //Создание свойства name и присвоение значения admin
user.email = "admin.example.com";

console.log(user.name);
console.log(user.email);

user.email = "admin.itvdn.com"; //изменения значения свойства email

console.log(user.email);
console.log(user);