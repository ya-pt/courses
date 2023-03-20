let cities = ["London", "Paris", "Italy", "Berlin", "Rome"];
//начиная с индекса 2 удалить 1 элемент и заменить на три значения
cities.splice(2, 1, "[Madrid]", "[Budapest]", "[Lisbon]");
for (const city of cities) {
  console.log(city);
}

console.log("----------")

//вставка значений без удаления, для этого используем 0 в качестве второго параметра
cities.splice(1, 0, "[Athens]", "[Warsaw]");
for (const city of cities) {
  console.log(city);
}
