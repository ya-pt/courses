// цикл может быть вложенным в другой цикл
for (let x = 1; x < 10; x++) {
  console.log("Таблица умножения на " + x);
  for (let y = 1; y < 10; y++) {
    console.log(`${x}*${y}= ${x * y}`);
  }
  console.log("");
}
