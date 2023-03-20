// Массивы в которых в качестве значений находятся объекты

// вариант1

let orders1 = [];
orders1.push({ product: "product1", price: 10 });
orders1.push({ product: "product2", price: 15 });
orders1.push({ product: "product3", price: 20 });

// вариант2

let orders2 = [];
orders2[0] = { product: "product1", price: 10 };
orders2[1] = { product: "product2", price: 15 };
orders2[2] = { product: "product3", price: 20 };

// вариант3
// наиболее часто используется, когда известно сколько в массиве должно быть объектов

let orders3 = [
  { product: "product1", price: 10 },
  { product: "product2", price: 15 },
  { product: "product3", price: 20 },
];

//цикл на количество элементов в массиве

for (let i = 0; i < orders3.length; i++) {
  let order = orders3[i];
  console.log(order.product);

  //короткая запись 2х предыдущих строк
  //console.log(orders3[i].product);
}