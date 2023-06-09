//при использовании while(делать, если выполняется условие) может быть ситуация, когда не выполнится ни одна итерация
//например: введеное число > 5 и мы сразу перейдем к alert

let value1 = +prompt("Введите любое число больше 5"); // + означает преобразование в number

while (value1 <= 5) {
  value1 = +prompt("Введите любое число больше 5");
}
alert("Вы ввели " + value1);

//при использовании цикла do/while(делать что-то, пока выполняется (true) условие), обязательно выполнится первая итерация

let value2;

do {
  value2 = +prompt("Введите любое число больше 10");
} while (value2 <= 10);
alert("Вы ввели " + value2);