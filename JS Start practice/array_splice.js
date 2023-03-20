let cities = ["London", "Paris", "Italy", "Berlin", "Rome"];

//splice(start, deleteCount, items...)
//start - индекс, с которого начать удалять элементы
//deleteCount - количество элементов для удаления
//items - значения, для добавления в массив, вместо удаленных

cities.splice(2, 1); //начиная с индекса 2, удалить 1 элемент
console.log(cities);

cities = ["London", "Paris", "Italy", "UK", "France", "Berlin", "Rome"];
cities.splice(2, 3); //начиная с индекса 2, удалить 3 элемента
console.log(cities);
