//проверка наличия свойства в объекте

let user1 = {
  login: "admin",
  email: "admin.com",
  unsubscribeDate: undefined,
};

//при попытке прочесть не существующее свойство возвращается значение undefined

//Ex1

//самый простой способ проверки, но может работать некорректно еcли в значении:
// 1.пустая строчка
// 2.хранится значение folse
// 3. 0 и т.п

if (user1.login) {
  //наличие значения эквивалентно true
  console.log("свойство user1.login существует");
} else {
  console.log("свойство user1.login не найдено");
}

//Ex2

//может работать некорректно еcли в значении: undefined

if (user1.email !== undefined) {
  console.log("свойство user1.email существует");
} else {
  console.log("свойство user1.email не найдено");
}

//Ex3

if ("unsubscribeDate" in user1) {
  console.log("свойство user1.unsubscribeDate существует");
} else {
  console.log("свойство user1.unsubscribeDate не найдено");
}