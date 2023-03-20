//массив с именами продуктов

let names = [];
names[0] = "Бумага офисная";
names[1] = "Биндеры для бумаги";
names[2] = "Ручка шариковая";

//массив с ценами продуктов

let prices = [];
prices[0] = 280.25;
prices[1] = 56;
prices[2] = 12.5;

let orderedProducts = promptOrderedProducts();
let totalPrice = calculateTotalPrice(orderedProducts);
showOrderDetails(totalPrice);

function promptOrderedProducts() {
  let products = [];
  for (let index = 0; index < names.length; index++) {
    const name = names[index];
    const price = prices[index];

    products[index] = +prompt(
      `Укажите количество продуктов ${name}, цена ${price}`,
      0 //placeholder
    );
  }
  return products;
}

function calculateTotalPrice(products) {
  let sum = 0;
  for (let index = 0; index < products.length; index++) {
    sum += prices[index] * products[index];
  }
  return sum;
}

function showOrderDetails(orderTotalPrice) {
  alert(`Сумма вашего заказа ${orderTotalPrice}.`);

  let isFreeShipping = orderTotalPrice > 1000;
  if (isFreeShipping) {
    alert("Доставка будет бесплатной.");
  }
}