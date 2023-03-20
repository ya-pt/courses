//"Игра 'Угадай число'". Суть игры - угадать за меньшее количество попыток число, которое загадал сценарий.
// Каждый раз, когда игрок пытается угадать число, сценарий выводит подсказку - меньшее или большее число было загадано сценарием.
// Сценарий загадывает число только один раз в начале игры и это число не меняется до завершения игры.
// Для решения задачи используйте циклические и условные конструкции.


let randomValue = Math.floor(Math.random() * (10 + 1)); // случайное значение от 0 до (указанное число + 1, т.е. включительно) будет записано в переменную randomValue

let counter = 1;
let yourNum;
let message;
do {
  yourNum = +prompt(
    'Game: "guess the number", please enter a number from 0 to 10.'
  );

  message =
    yourNum < randomValue
      ? `number greater than ${yourNum}, try again!`
      : yourNum > randomValue
      ? `number less than ${yourNum}, try again!`
      : `Great! This value - ${randomValue}, you guessed right on the ${counter}-th try.`;

  counter++;

  alert(message);
} while (yourNum !== randomValue);