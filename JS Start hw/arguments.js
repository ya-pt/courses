// Псевдомассив аргументов "arguments"
// Элементы индексируются начиная с нуля.
// Объект arguments - это локальная переменная, доступная внутри любой (нестрелочной) функции.
// Объект arguments не является Array. Он похож на массив, но не обладает ни одним из его свойств, кроме length.
// Применение оператора typeof к arguments вернёт 'object'.

// ex

function sum() {
  var total = 0;
  for (var i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5)); // Output: 9
console.log(sum(10)); // Output: 10