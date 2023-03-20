// Задание:
// Напишите сценарий, который будет запрашивать у пользователя значения, до тех пор, пока тот не введет значение stop
// Все введенные значения, если они являются числом, должны быть добавлены в массив.
// После того, как пользователь ввел значение стоп, посчитайте сумму всех значений, которые находятся в массиве.

let yourNum;
const arrayNum = [];
let sum = 0;
do {
  yourNum = prompt("Enter a number or type 'stop' to calculate the sum");
  yourNum = yourNum.toLowerCase();

  if (isNaN(yourNum) && yourNum !== "stop") {
    alert("Invalid input, please enter a number.");
  } 
  
  else if (!isNaN(yourNum)) {
    yourNum = Number(yourNum); //convert string to number
    arrayNum.push(yourNum);
  }
} 

while (yourNum !== "stop");
{
  sum = arrayNum.reduce((total, amount) => total + amount, 0); //reduce - get the sum of the array of numbers
  alert(`The sum is ${sum}.`);
}



// const arrayNum = [];
// let sum = 0;

// while (true) {
//   const userInput = prompt("Enter a number or type 'stop' to calculate the sum:");
//   if (userInput.toLowerCase() === 'stop') {
//     break;
//   }

//   if (isNaN(userInput)) {
//     alert("Invalid input, please enter a number.");
//     continue;
//   }

//   const number = Number(userInput);
//   arrayNum.push(number);
// }

// if (arrayNum.length) {
//   sum = arrayNum.reduce((total, num) => total + num);
//   alert(`The sum is ${sum}.`);
// }