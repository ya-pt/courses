function test(counter) {
  counter--;
  console.log("part 1 - " + counter);

  if (counter != 0) {
    test(counter);
  }

  console.log("part 2 - " + counter);
}

test(3);

//начиная со 2 строки, когда counter 2 и 1, условие (true)  и значения не доходят до part 2, 
//пока все итерации выше не будут выполнены
//только потом запишет и их


//пример - файловая система
//пример - факториал

