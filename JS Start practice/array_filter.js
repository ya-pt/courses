// filter - возвращает новый массив, состоящий из элементов отобранных функцией (true)

let data1 = [1, 2, 3, 4, 5, 6];
let data2 = data1.filter(function (value) {
  return value % 2 == 0;
});

// аналогичный код с использованием стрелочной функции

let data3 = data1.filter((value) => value % 2 == 0);

console.log(data1); //все значения
console.log(data2); //только четные
console.log(data3); //только четные