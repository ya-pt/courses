//задаем переменную в самом цикле
for (let i = 0; i < 10; i++) {
  console.log("iteration # " + i);
}

//можем использовать уже существующую переменную
let x = 0;
for (x = 0; x < 10; x++) {
  console.log("(cycle 2) iteration # " + x);
}

//можем пропускать(не желательно) отдельные параметры
let y = 0;
for (; y < 10; y += 2) {
  console.log("(cycle 3) iteration # " + y);
}

//можем манипулировать переменной в самом теле цикла
let z = 0;
for (; z < 10; ) {
  console.log("(cycle 4) iteration # " + z);
  z++;
}

//задачка: посчитать сумму чисел, между двумя заданными числами
let start = 2;
let end = 8;
let sum = 0;

for (let i = start; i <= end; i++) {
  sum += i;
}

console.log(`Сумма чисел между числами ${start} и ${end} - ${sum}`);