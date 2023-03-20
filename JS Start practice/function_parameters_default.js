//если знвчение для параметра repeatCount не будет предоставлено при вызове, будет использоваться значение по умолчанию

function showMessage(text, repeatCount = 1) {
  for (let i = 0; i < repeatCount; i++) {
    console.log(text);
  }
}

showMessage("Hello world"); //так как нет второго значения при вызове - используется значение по умолчанию
showMessage("Привет мир", 2);
showMessage("ABC");