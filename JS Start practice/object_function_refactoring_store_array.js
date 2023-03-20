function createProduct(name, price) {
  //фабричная функция
  return {
    name,
    price,
    ordered: 0,
    calculateTotal() {
      return this.price * this.ordered;
    },
  };
}

let products = [
  createProduct("Бумага офисная", 280.25),
  createProduct("Биндеры для бумаги", 56),
  createProduct("Ручка шариковая", 12.5),
];

//цикл для получения количества покупаемых продуктов

for (let index = 0; index < products.length; index++) {
  const name = products[index].name;
  const price = products[index].price;

  products[index].ordered = +prompt(
    `укажите количество продуктов ${name}, цена ${price}`
  );
}

//цикл для расчета общей цены купленных продуктов

let totalPrice = 0;
for (let index = 0; index < products.length; index++) {
  totalPrice += products[index].calculateTotal();
}

alert(`сумма вашего заказа ${totalPrice}.`);

let isFreeShipping = totalPrice > 1000;
if (isFreeShipping) {
  //true
  alert("доставка будет бесплатной.");
}