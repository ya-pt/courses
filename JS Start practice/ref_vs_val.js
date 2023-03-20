// object - reference type
// все остальные типы - value type

console.log("-----типы значений-----"); //данные хранятся в STACK
let ordinalNumber = 10;
let copyNumber = ordinalNumber; //копируется, непосредственно, само значение 10

console.log("до изменения");
console.log("ordinalNumber = " + ordinalNumber);
console.log("copyNumber = " + copyNumber);

ordinalNumber = 15;
console.log("после изменения");
console.log("ordinalNumber = " + ordinalNumber);
console.log("copyNumber = " + copyNumber);

console.log("-----ссылочные типы-----"); //данные хранятся в HEAP

let originalUser = {
  //в переменной originalUser хранится ссылка
  login: "user",
  pass: "1234",
};
let copyUser = originalUser; //ссылаются на один и тот же объект, который хранится в КУЧЕ

console.log("до изменения");
console.log("originalUser.login = " + originalUser.login);
console.log("copyUser.login = " + copyUser.login);

originalUser.login = "admin";
console.log("после изменения");
console.log("originalUser.login = " + originalUser.login);
console.log("copyUser.login = " + copyUser.login);