// Задание:
// Запросите у пользователя число.
// Выведите все числа в обратном порядке от введенного пользователем значения до 1.
// Используйте для решения рекурсию.

let num = +prompt("Enter a positive integer:");
getNumbersReverseOrder(num);

function getNumbersReverseOrder(num) {
  if (num < 1) { //1
    console.log("you entered a number less than 1");
    return;
  }

  if (num === 1) { //3
    console.log(num);
    return;
  } else {
    console.log(num);
    getNumbersReverseOrder(num - 1); //2
  }
}

// rules:
// 1.защита от дураков
// 2.действие
// 3.условия выхода(успех)