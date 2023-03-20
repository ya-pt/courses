let characters = ["A", "B", "C", "D", "E", "F", "G"];
//slice (start,end)
//slice - возвращает новый массив, в который копирует элементы с start до end (не включая)
let arr = characters.slice(1, 4);
console.log(arr); // B, C, D
console.log(characters); // A, B, C, D, E, F, G