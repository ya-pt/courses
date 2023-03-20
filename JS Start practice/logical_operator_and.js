// пример использования логического оператора И (конъюнкция)

let login = "admin";
let password = "12345";

let inputLogin = prompt("Введите логин");
let inputPassword = prompt("Введите пароль");

// если логин И пароль введены верно, данный пользователь - авторизован

if (inputLogin == login && inputPassword == password) {
  alert("Вы авторизованы!");
} else {
  alert("Логин или пароль введены не правильно.");
}
