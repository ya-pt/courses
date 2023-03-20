let firstName;
let lastName;
let age;

function ask() {
  firstName = prompt("Введите свое имя:");
  lastName = prompt("Введите свою фамилию:");
  age = prompt("Введите свой возраст:");
}

function say() {
  console.log("Имя: " + firstName);
  console.log("Фамилия: " + lastName);
  console.log("Возраст: " + age);
}

let needRepeat;

//с этого цикла, функции ask & say будут вызваны, сами по себе они не инициализируются
do {
  ask();
  say();
  needRepeat = confirm("Пройти заполнения еще раз?");
} while (needRepeat);
