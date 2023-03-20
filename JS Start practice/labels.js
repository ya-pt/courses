// first: метка для цикла, на которую можно перейти с помощью break или continue
first: for (let x = 1; x < 10; x++) {
  console.log("Таблица умножения на " + x);
  for (let y = 1; y < 10; y++) {
    if (x == 5) {
      break first; // когда x равен 5 - закончить работу цикла с меткой first:
    }
    console.log(`${x}*${y}= ${x * y}`);
  }
  console.log("");
}