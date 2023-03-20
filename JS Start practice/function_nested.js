//Функции могут быть вложенными в другие функции.
//На основе данного синтаксиса производят - замыкание.

function calculate(x1, y1, x2, y2) {
  function operation(a, b) {
    let sum = a + b;
    return sum;
  }

  let data = operation(x1, x2) + operation(y1, y2);
  return data;
}

let result = calculate(1, 2, 3, 4);
console.log(result);