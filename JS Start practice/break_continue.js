// while (true) позволяет сделать цикл бесконечным
// можем в самом теле прописать break и остановить цикл

let sum = 0;

while (true) {
  let value = prompt("Введите числовые значения. Для выхода введите exit.");

  if (value == "exit") {
    break;
  }

  let convertedValue = Number(value); // преобразование value в число

  //isNaN - это "не число", проверям условие
  if (isNaN(convertedValue)) {
    continue; //перейти на следующую итерацию цикла, не приступать к ниже написанным строкам кода
  }

  sum += convertedValue;
}

alert("Сумма всех введенных числовых значений - " + sum);
