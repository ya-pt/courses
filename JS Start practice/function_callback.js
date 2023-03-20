// callback - функция обратного вызова, когда создаем функцию и передаем ее в другую функцию

function myFilter(fn) {
  let data = [1, 3, 5, 7, 8, 88, 1, 53, 6, 2, 3, 1, 7, 88, 9, 16];
  let result = [];

  for (let i = 0; i < data.length; i++) {
    if (fn(data[i]) === true) {
      result.push(data[i]);
    }
  }

  return result;
}

//функция объявление
function equal1(x) {
  return x === 1;
}

//функция-выражение
let greatThan10 = function (x) {
  return x > 10;
};

console.log(myFilter(equal1));
console.log(myFilter(greatThan10));

//анонимная функция
console.log(myFilter(function (x) { return x < 5; }));

//стрелочная функция
console.log(myFilter(x => x < 5));