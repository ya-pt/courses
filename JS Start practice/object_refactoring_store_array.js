let products = [
  {
    name: "Бумага офисная",
    price: 280.25,
    ordered: 0,
  },
  {
    name: "Биндеры для бумаги",
    price: 56,
    ordered: 0,
  },
  {
    name: "Ручка шариковая синяя",
    price: 12.5,
    ordered: 0,
  },
];

//Цикл для получения количества покупаемых продуктов

for (let index = 0; index < products.length; index++) {
  const name = products[index].name;
  const price = products[index].price;

  products[index].ordered = +prompt(
    `Укажите количество продуктов ${name}, цена ${price}`,
    0
  );
}

//Цикл для расчета общей цены купленных товаров

let totalPrice = 0;

for (let index = 0; index < products.length; index++) {
  totalPrice += products[index].price * products[index].ordered;
}

alert(`Сумма вашего заказа ${totalPrice}.`);

let isFreeShipping = totalPrice > 1000;

if (isFreeShipping) {
  alert("Доставка будет бесплатной");
}