let names = [];
names[0] = "Бумага офисная";
names[1] = "Биндеры для бумаги";
names[2] = "Ручка шариковая";
names[3] = "test";

let prices = [];
prices[0] = 280.25;
prices[1] = 56;
prices[2] = 12.5;
prices[3] = 10;

//массив для записи количества продуктов
let products = [];

//цикл для получения количества покупаемых продуктов
for (let index = 0; index < names.length; index++) {
  const name = names[index];
  const price = prices[index];

  products[index] = +prompt(
    `Укажите количество продуктов ${name}, цена ${price}`,
    0 //placeholder
  );
}

//цикл для расчета общей цены купленных продуктов
let totalPrice = 0;

for (let index = 0; index < products.length; index++) {
  totalPrice += prices[index] * products[index];
}

alert(`Сумма вашего заказа ${totalPrice}.`);

//дополняем задачку условием с одной переменной
let isFreeShipping = totalPrice > 1000;
if (isFreeShipping) {
  alert("Доставка будет бесплатной.");
}
