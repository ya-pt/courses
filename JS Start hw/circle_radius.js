let r = 15; // радиус
let Pi = 3.1415; // число Пи

// Вычислите значение площади окружности на основании значений выше.
// Площадь круга равна произведению квадрата радиуса на число Пи (3.1415)
// Выведите результат

let sOne = Pi * r * r;
alert("one:" + sOne);

//С появлением стандарта ES6, появилась возможность возведения в степень числа с помощью такого оператора — **
let sTwo = Pi * r ** 2;
alert("two:" + sTwo);

//Math.pow(base, exponent)
//base — число, которое возводится в степень
//exponent — степень, в которую нужно возвести
let sThree = Math.pow(15, 2) * Pi;
alert("three:" + sThree);

//можно написать собственную функцию
function pow(a, b) {
  let result = a;
  for (let i = 1; i < b; i++) {
    result *= a;
  }
  return result;
}

let sFour = pow(r, 2);
alert("four:" + sFour * Pi);
