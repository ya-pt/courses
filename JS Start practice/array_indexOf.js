let cities = ["London", "Paris", "Berlin", "Rome", "Lisbon", "Rome"];
//indexOf - ищет элемент с указанным значением в массиве и возвращает его индекс, или -1, если значение не найдено

let index;
index = cities.indexOf("Rome");
console.log(index); //3

index = cities.indexOf("Madrid");
console.log(index); //-1 значение не найдено

//искать индекс значения Rome, начиная с 4 индекса массива

index = cities.indexOf("Rome", 4);
console.log(index); //5

//lastIndexOf - поиск справа налево
index = cities.lastIndexOf("Rome"); //5
console.log(index);