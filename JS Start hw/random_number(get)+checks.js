//Задание:
//Создать функцию.
//Результатом должно получиться рандомное число или числа (количество итераций можно выбрать) от указанных (min, max) значений
//Выполнить проверки.

Game();

function Game(){
    let throwCount;

    do{
        throwCount = GetNumber("Сколько раз вы хотите бросить шестигранный кубик");// 0
        
        if(throwCount === null){
            return; // GAME STOP
        }

        if(throwCount < 1){
            alert("sorry, you need to enter a number from 1.")
        }

    }while(throwCount < 1)

    let minRange = GetNumber("enter min range"); // 10

    if(minRange == null)
    {
        return; // STOP GAME
    }

    let maxRange; // 5
    
    do{
        maxRange = GetNumber("enter max range"); // 5

        if(maxRange == null)
        {
            return; // STOP GAME
        }

        if(maxRange < minRange){
            alert("apulaz");
        }

    }while(minRange > maxRange)
    
    for (let i = 0; i < throwCount; i++) {
        alert(getRandom(minRange, maxRange));
    }
}


function GetNumber(question) {
  let result;
  do {
    result = prompt(question);
    if (result === null) {
      break;
    }

    result = Number.parseInt(result); //Этот метод имеет ту же функциональность, что и глобальная функция parseInt()

    if (isNaN(result)) {
      alert("sorry, you need to enter a number.");
    }
  } while (isNaN(result));

  return result;
}

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //Максимум (благодаря +1) и минимум включаются
}