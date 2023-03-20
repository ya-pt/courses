// This -
//указывает на объект, которому принадлежит метод or (function)

let user1 = {
  login: "admin",
  email: "admin.com",
  print: function () {
    console.log(this); //указывает на user1
  },
};

//указывает на глобальный объект window, если функция определена вне пользовательского объекта

let print = function () {
  console.log(this); //указывает на window
};

//содержит значение undefined, если функция определена вне пользовательского объекта и используется strict mode

//Контекст функции может быть изменен с помощью методов call(), apply(), bind()