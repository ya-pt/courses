//пример функции, которая использует несколько return

function calculateArea(side1, side2, side3) {
  //если нет значения для аргумента side1 или side2 - не выполняем, возвращаем undefined
  if (side1 === undefined || side2 === undefined) {
    return;
  }

  //если не указана side3, но указана side1 и side2 - считаем площадь квадрата
  if (side3 === undefined) {
    return side1 * side2;
  } else {
    //если указано три стороны - считаем площадь треугольника по формуле Герона
    let p = (side1 + side2 + side3) / 2; //полупериметр треугольника
    return Math.sqrt(p * (p - side1) * (p - side2) * (p - side3)); //корень произведений
  }
}

let result = calculateArea(10, 10);
console.log("Площадь квадрата " + result);

result = calculateArea(10, 10, 15);
console.log("Площадь треугольника " + result);

result = calculateArea(10);
console.log("Площадь фигуры " + result);
