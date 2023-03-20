let currentDate = new Date(); //записываем в переменную текущую информацию о времени
let day = currentDate.getDay(); //вытаскиваем текущий день
let year = currentDate.getFullYear(); //вытаскиваем текущий год

console.log("Значение переменной day - " + day);
console.log("Значение переменной year - "+ year);

let dayMessage = day == 0 || day == 6 ? "Сегодня выходной" : "Сегодня рабочий день";
let yearMessage = year % 4 == 0 ? "Этот год високосный" : "Этот год не високосный";

alert(dayMessage + "\r\n" + yearMessage);