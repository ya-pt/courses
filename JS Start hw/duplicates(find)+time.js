// Дан массив целых чисел. Проверьте есть ли в нем одинаковые элементы. Если есть выведите их на экран.
//  how much they duplicates?

let time = performance.now();

let values = [10, 20, 4, 6, 11, 9, 125, 10, 10, 0, 3, 5, 89, 12, 46, 77, 3, 10, 3, 3 , 4, 11];

// for EX 2________________________________________________________________________________

// let clone = Object.assign([], values);    //create a new array (clone, not a reference) that can be modified
// let sameValues = [];

// for (let value of clone){
//     let count = 1;
//     clone.splice(clone.indexOf(value),1, " ");
//     let check = clone.indexOf(value);

//     for(let x of clone){
//         if( x === value)
//         count++;
//     }
    
//     if(check !== -1 && sameValues.indexOf(value) === -1){
//         sameValues.push(value);
//         console.log(`this value ${value} is repeated ${count} times`);
//     }
    
// }

// time = performance.now() - time;
// console.log('Время выполнения = ', time);

// for EX 2.1_________________________________________________________________________________

// let sameValues = [];

// for(let i = 0; i < values.length; i++)
// {
//     let currentValue = values[i];
//     let repeated = 1;

//     for(let j = i + 1; j < values.length; j++)
//     {
//         if(currentValue === values[j] && !sameValues.find(x => x == currentValue))
//         {
//             repeated++;
//         }
//     }

//     if(repeated > 1){
//         sameValues.push(currentValue);
//         console.log(`this value ${currentValue} is repeated ${repeated} times`);
//     }
// }

// time = performance.now() - time;
// console.log('Время выполнения = ', time);

// for EX 2.2_________________________________________________________________________________

let sameValues = [];

for(let i = 0; i < values.length; i++)
{
    let currentValue = values[i];
    let repeated = 1;

    for(let j = i + 1; j < values.length; j++)
    {
        if(sameValues.find(x => x == currentValue)){
            break;
        }

        if(currentValue === values[j])
        {
            repeated++;
        }
    }

    if(repeated > 1){
        sameValues.push(currentValue);
        console.log(`this value ${currentValue} is repeated ${repeated} times`);
    }
}

time = performance.now() - time;
console.log('Время выполнения = ', time);

// ______________________________________________________________

// How it work?
// Method find(element — элемент массива в текущей итерации)
// В метод find() необходимо передать аргументом функцию. 
// Функция должна return булевое значение true или false. 
// find() вернёт первый элемент, на котором переданная функция-колбэк вернула true.


// for EX 2.3_________________________________________________________________________________

// let sameValues = {};

// for(let i = 0; i < values.length; i++) {
//     let currentValue = values[i];
//     if(sameValues[currentValue]) {
//         sameValues[currentValue]++;
//     } else {
//         sameValues[currentValue] = 1;
//     }
// }

// for (let key in sameValues) {
//     if(sameValues[key] > 1) {
//         console.log(`this value ${key} is repeated ${sameValues[key]} times`);
//     }
// }

// time = performance.now() - time;
// console.log('Время выполнения = ', time);