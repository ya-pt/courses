// Задание:
// Создайте функцию, которая принимает массив значений и возвращает массив с дублирующимися значениями 
// или null если повторяющихся значений в массиве нет, выполнить остальные проверки.

let array = [10,2,10,2,"h","h","a",1,7];
let string = "hello";
let nonRepeatArray = [10,11,12,13,14];
let emptyArray = [];

findDuplicatesInArray(array);
findDuplicatesInArray(string);
findDuplicatesInArray(nonRepeatArray);
findDuplicatesInArray(emptyArray);

function findDuplicatesInArray(array){
    
    if(!Array.isArray(array)){
        alert("Input is not an array")
        return [];
    }

    if(array.length === 0){
        alert("Array is empty");
        return;
    }

    let duplicates = [];

    for(let i = 0; i < array.length; i++){
        let currentValue = array[i];
        let repeated = 1;

        for(let j = i + 1; j < array.length; j++){
            if(duplicates.find( x => x == currentValue)){
                break;
            }

            if(currentValue === array[j]){
                repeated++;
            }
        }

        if(repeated > 1){
            duplicates.push(currentValue);
        }
    }

    if(duplicates.length == 0){
        alert("null");
        return;
    }

    alert(duplicates);
}