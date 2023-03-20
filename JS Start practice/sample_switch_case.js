// \r\n - специальная последовательность, которая отображается как перенос на новую строку

let totalPrice = 7000;
let shippingPrice = 0;

let shippingType = prompt(
  "Выберите способ доствки \r\n 1 - Курьер \r\n 2 - Служба доставки А \r\n 3 - Служба доставки Б"
);

switch (shippingType) {
  case "1":
    shippingPrice = 30;
    shippingMessage = "Выбрана доставка курьером.";
    break;
  case "2":
    shippingPrice = 20;
    shippingMessage = "Выбрана служба доставки А.";
    break;
  case "3":
    shippingPrice = 25;
    shippingMessage = "Выбрана служба доставки Б.";
    break;
  default:
    shippingPrice = 30;
    shippingMessage = "Выбрана доставка курьером.";
    break;
}

if (totalPrice > 1000) {
  shippingPrice = 0;
  shippingMessage = "Доставка бесплатная.";
} else {
  shippingMessage += `\r\nСтоимость доставки ${shippingPrice}\r\nБесплатная доставка от 1000.`;
}

alert(`Сумма вашего заказа ${totalPrice}. ${shippingMessage}`);