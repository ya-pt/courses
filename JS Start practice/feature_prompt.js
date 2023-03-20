let product1 = "бумага";
let product2 = "папки";
let product3 = "ручки";

let productPrice1 = 280.25;
let productPrice2 = 56;
let productPrice3 = 12.5;

//+prompt - данные преобразуются в тип Number, или
//устаревший вариант - Number(prompt());

let productQuantity1 = +prompt(
  `укажите количество продуктов - ${product1}, цена ${productPrice1}`,
  0
);
let productQuantity2 = +prompt(
  `укажите количество продуктов - ${product2}, цена ${productPrice2}`,
  0
);
let productQuantity3 = +prompt(
  `укажите количество продуктов - ${product3}, цена ${productPrice3}`,
  0
);

let totalPrice = 0;

totalPrice += productPrice1 * productQuantity1;
totalPrice += productPrice2 * productQuantity2;
totalPrice += productPrice3 * productQuantity3;

let shippingMessage;
// Если общая цена больше чем 1000, доставка бесплатная, иначе - доставка за счет получателя

if (totalPrice > 1000) {
  shippingMessage = "Доставка бесплатная";
} else {
  shippingMessage =
    "Бесплатная доставка при заказе от 1000. Стоимость доставки 15.";
}

alert(`Сумма вашего заказа ${totalPrice}. ${shippingMessage}.`);