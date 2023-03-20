let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];
//лучше использовать для сравнения первое число из массива, но есть и такой способ, для положительных значений:

let max = Number.MIN_VALUE; //самое маленькое положительное число(это значение близко к нулю), которое можно представить в JavaScript.

for (let index = 0; index < values.length; index++) {
  const element = values[index];
  if (element > max) {
    max = element;
  }
}

console.log("MAX значение массива - " + max);