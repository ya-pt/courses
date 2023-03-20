// Задание:
// Напишите сценарий, который найдет минимальное, максимальное значения массива, а также выведет сумму всех элементов массива.

let values = [10, 20, 4, 6, 11, 9, 125, 1, 8, 0, 3];

if (values.length == 0){
    alert("this array is empty");
}

let minNum = values[0];
let maxNum = values[0];
let sumArray = values[0];

for (i = 1; i < values.length; i++){

    if(values[i] >= maxNum){
        maxNum = values[i];
    }

    if(values[i] <= minNum){
        minNum = values[i];
    }

    sumArray += values[i];
}
alert(`max number: ${maxNum}`);
alert(`min number: ${minNum}`);
alert(`sum of all array elements ${sumArray}`);