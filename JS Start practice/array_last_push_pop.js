let cities = ["London", "Paris", "Berlin", "Rome"];

//pop() - метод массива, который удаляет последний элемент массива и возвращает его
let last = cities.pop(); //удаляем последний элемент массива и записываем его в переменную

console.log("pop result " + last);

for (let index = 0; index < cities.length; index++) {
  console.log(cities[index]);
}

console.log("--------------");

//push(>value<) - метод, который добавляет указанное значение в конец массива
cities.push(">Lisbon<");

for (let index = 0; index < cities.length; index++) {
  console.log(cities[index]);
}
