let result;

//функция объявление
function add(a, b) {
  let temp = a + b;
  return temp;
}

result = add(1, 2);

//именованная функция-выражение
let add1 = function add(a, b) {
  return a + b;
};

result = add1(10, 20);

//функция-выражение или анонимная функция
let add2 = function (a, b) {
  return a + b;
};

result = add2(100, 200);

//стрелочная функция (arrow function)
let add3 = (a, b) => {
  return a + b;
};

result = add3(1000, 2000);

//стрелочная функция (arrow function) сокращенная, которая только возвращает (return)

let add4 = (a, b) => a + b;
result = add4(50, 55);