// Попросите у пользователя ввести название города. Удалите этот(эти) город(а) из элементов массива.
// Учесть, что пользователь может вводить название города в любом регистре.
// Если города нет в массиве, сообщите об этом пользователю.
// Выведите массив на экран после удаления элементов.

let cities = [
  "London",
  "London",
  "Paris",
  "Berlin",
  "Rome",
  "Budapest",
  "Lisbon",
  "Madrid",
  "Amsterdam",
];

let yourCity = prompt(`Please enter city`);

if ([null, ""].includes(yourCity)) { //Для сопоставления (||) нескольких условий, запишем их в массив и используем метод includes().
  alert(`you didn't add anything`);
} else {
  yourCity = yourCity.toLowerCase(); // нижний регистр
  yourCity = yourCity.charAt(0).toUpperCase() + yourCity.substring(1); // первую букву делаем заглавной (substring or slice)
  if (cities.find((x) => x === yourCity)) {
    while (cities.find((x) => x === yourCity)) {
      cities.splice(cities.indexOf(yourCity), 1);
    }
    alert(cities);
  } else {
    alert(`this city ${yourCity} is not on the list`);
  }
}