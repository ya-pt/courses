let cities = ["London", "Paris", "Berlin", "Rome"];

//shift() - метод массива, который удаляет первый элемент массива и возвращает его

let first = cities.shift(); //удаляем первый элемент массива и записываем его в переменную

console.log("shift result " + first);

for (let index = 0; index < cities.length; index++) {
  console.log(cities[index]);
}

console.log("--------------");

//unshift(>value<) - метод, который добавляет указанное значение в начало массива

cities.unshift(">Lisbon<");
for (let index = 0; index < cities.length; index++) {
  console.log(cities[index]);
}
