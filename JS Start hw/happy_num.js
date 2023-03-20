// Task: you need to find a lucky number - this is a number that repeats as many times as it has a value.
// if there is no lucky number, return "0"
// if there are lucky numbers, return the larger one

let num = 112243335566;
findLuckyNum(num);

//***Метод new Set(arr) создает новую коллекцию. Объект set может содержать в себе только уникальные элементы.

//***Метод массива reduce() позволяет превратить массив в любое другое значение с помощью переданной функции-колбэка и начального значения.
//Функция-колбэк будет вызвана для каждого элемента массива, и всегда должна возвращать результат.

//***Метод массива . filter() позволяет получить новый массив, отфильтровав элементы с помощью переданной колбэк-функции.
//Колбэк-функция будет вызвана для каждого элемента массива и по результату функции примет решение включать этот элемент в новый массив или нет.

function findLuckyNum(num) {
  let numStr = num.toString();
  let numArr = numStr.split("");

  //getting only unique values
  let allUniqVal = [...new Set(numArr)];

  let noLuckyNum = true;
  let luckyNum = [];

  //getting repetitions of unique values
  const numRepetitions = allUniqVal.reduce((obj, n) => {
    let count = numArr.filter((x) => x === n).length;
    obj[n] = count;
    return obj;
  }, {}); //начальное значение obj - {}
  console.log(numRepetitions);

  //creating an array with all the lucky numbers
  for (let value in numRepetitions) {
    if (value == numRepetitions[value]) {
      noLuckyNum = false;
      luckyNum.push(value);
    }
  }

  if (noLuckyNum) {
    console.log(`0`);
  } else {
    //only shows the maximum lucky number
    luckyNum = Math.max(...luckyNum);
    console.log(`lucky number - ${luckyNum}`);
  }
}