// Задание:
// Дано массив. Поменяйте элемент с максимальным значением местами с элементом с минимальным значением.

let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];

let valueMin = values[0];
let valueMax = values[0];

for (let i = 1; i < values.length; i++){
    if(values[i] < valueMin){
        valueMin = values[i];
    }
    if(values[i] > valueMax){
        valueMax = values[i];
    }    
}

let indexMin = values.indexOf(valueMin);
let indexMax = values.indexOf(valueMax);

// values.splice(indexMin, 1 , valueMax); //удаляет 1 элемент по индексу indexMin и вставляет valueMax
// values.splice(indexMax, 1 , valueMin); //удаляет 1 элемент по индексу indexMax и вставляет valueMin

//or

values[indexMin] = valueMax;
values[indexMax] = valueMin;

console.log(values);