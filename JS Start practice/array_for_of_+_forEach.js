let cities = ["London", "Paris", "Berlin", "Rome"];

//проходим по всем значениям массива cities
//на каждой итерации в переменную city, будут поочередно записываться значения из массива cities

for (const city of cities) {
  console.log(city);
}

// ES5 добавлена forEach - новая возможность обхода всех элементов массива и запуск определенной функции для каждого элемента

// пример

let data = [1, 2, 3, 4, 5];
let sum = 0;

data.forEach(function (value) {
  sum += value;
});

console.log(sum);

// аналогичный код с использованием стрелочной функции

let sum2 = 0;
data.forEach((value) => (sum2 += value));
console.log(sum2);
