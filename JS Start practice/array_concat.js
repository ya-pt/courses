let characters = ["A", "B", "C"];
let numbers = [1, 2, 3];
//concat - создает новый массив, копируя в него данные из указанных массивов

let values = characters.concat(numbers);
console.log(values); // A, B, C, 1, 2, 3

let valuesExtended = characters.concat(numbers, "!", "&", "#");
console.log(valuesExtended); // A, B, C, 1, 2, 3, !, &, #