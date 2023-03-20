//конструкции с тернарным оператором

let age = +prompt("Введите ваш возраст");
let technology = prompt("Ведите 1 или 2. 1 - JavaScript. 2 - C#");
let expirience = prompt("Введите опыт работы в годах.");

let messageAge = age >= 18 ? "совершеннолетний" : age > 0 ? "несовершеннолетний" : "error";

let messageSpecialization = technology === 1 ? "Frontend" : technology === 2 ? "Backend" : "error";

let messagePosition =
  expirience === 0
    ? "Без опыта работы"
    : expirience > 0 && expirience < 1.5
    ? "Junior"
    : expirience > 1.5 && expirience < 3
    ? "Middle"
    : expirience > 3
    ? "Senior"
    : "error";

let result = `Возраст: ${messageAge}\r\nСпециализация: ${messageSpecialization}\r\nПозиция: ${messagePosition}`;
alert(result);