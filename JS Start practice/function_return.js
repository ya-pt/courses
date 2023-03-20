//в функциях можно использовать ключевое слово return, которое возвращает некоторое значение
//return прекращает выполнение функции, оставшиеся инструкции в функции не выполняются

function sum(x, y) {
  let sumResult = x + y;
  return sumResult;

  console.log("Код после return не выполняется");//эта инструкция не сработает
}

let result = sum(10, 20);
console.log(result);