let values = [];

while (true) {
  let input = prompt("Введите число или exit для завершения");

  if (input === "exit") break;
  let value = Number(input);

  if (isNaN(value)) {
    alert("Введеное значение не число.");
  } else {
    values.push(value);
  }
}

let sum = 0;
for (let index = 0; index < values.length; index++) {
  sum += values[index];
}

alert("Сумма введенных значений " + sum);
