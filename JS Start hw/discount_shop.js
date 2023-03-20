//Если заказ от 500, скидка 5%, если заказ от 1000 скидка 10%, если заказ от 1500 скидка 15% и доставка бесплатная.
//Выведите пользователю стоимость заказа с учётом скидки и сумму скидки, которую он получил.
//Также информацию о стоимости доставки, если она была заказана.

const paper = "Бумага офисная А4, 80 г/м2, 500 л";
const binders = "Биндеры для бумаги 51 мм";
const ballpointPen = "Ручка шариковая синяя";

const paperPrice = 280.25;
const bindersPrice = 56;
const ballpointPenPrice = 12.5;

let productQuantity1 = +prompt(
  `Укажите количество продуктов '${paper}', цена ${paperPrice}`,
  0
);
let productQuantity2 = +prompt(
  `Укажите количество продуктов '${binders}', цена ${bindersPrice}`,
  0
);
let productQuantity3 = +prompt(
  `Укажите количество продуктов '${ballpointPen}', цена ${ballpointPenPrice}`,
  0
);

const totalPricePaper = paperPrice * productQuantity1;
const totalPriceBinders = bindersPrice * productQuantity2;
const totalPriceBallpoint = ballpointPenPrice * productQuantity3;

let total = totalPricePaper + totalPriceBinders + totalPriceBallpoint;

let сurrentDiscount = 0;
let isFreeDelivery = false;
const priceDelivery = 40;

if (total >= 1500) {
  сurrentDiscount = 15;
  isFreeDelivery = true;
  alert("Congratulations your delivery is free!");
} else if (total >= 1000) {
  сurrentDiscount = 10;
} else if (total >= 500) {
  сurrentDiscount = 5;
}

let shipping = confirm("Заказываете доставку курьером?");

if (сurrentDiscount > 0) {
  let totalWithDiscount = total - total * (сurrentDiscount / 100);
  let amountDiscount = total - totalWithDiscount;

  if (!isFreeDelivery && shipping) {
    totalWithDiscount += priceDelivery;
  }

  alert(
    `order price including discount ${сurrentDiscount}%: ${
      Math.round(totalWithDiscount * 100) / 100 //округление до ближайшего целого
    }`
  );

  alert(
    `the amount of your discount: ${Math.round(amountDiscount * 100) / 100}`
  );
} else {
  if (shipping) {
    total += priceDelivery;
  }

  alert(`order price total ${total}`);
}