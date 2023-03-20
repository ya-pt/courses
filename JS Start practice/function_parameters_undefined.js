//если при вызове функции значения для параметра не передавалось, значение parameter = undefined

function showMessage(text, repeatCount) {
  if (repeatCount === undefined) {
    repeatCount = 1;
  }

  for (let i = 0; i < repeatCount; i++) {
    console.log(text);
  }
}

showMessage("Hello world"); //нет второго значения при вызове, параметр repeatCount = undefined
showMessage("Привет мир", 2);
showMessage("ABC");//нет второго значения при вызове, параметр repeatCount = undefined