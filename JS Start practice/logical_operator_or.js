// пример использования логического оператора ИЛИ (дизъюнкция)

let totalSum = 901; // общая сумма покупок
let isClientBirthday = false; // true, если сегодня ден рождение клиента

let toPaySum = totalSum;
// если сумма покупок более 900 ИЛИ сегодня у клиента День Рождения, применить скидку в 10%

if (totalSum > 900 || isClientBirthday == true) {
  let discount = totalSum * 0.1;
  toPaySum -= discount; // toPaySum = toPaySum - discount
}

alert("сумма к оплате - " + toPaySum);
