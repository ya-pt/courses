// Задание:
// Создайте фабричный метод для создания объектов со свойствами name, price, ordered. 


function createProduct(name, price){
    //фабричная функция
    return{
        //изменятся значения в свойствах 
        name: name, // или просто name,
        price: price,// price,
        ordered: 0,

        calculateTotal(){
            return this.price * this.ordered;
        },
    };
}


let products = [
    createProduct("Бумага офисная А4, 80 г/м2, 500 л", 280.25),
    createProduct("Биндеры для бумаги 51 мм", 56),
    createProduct("Ручка шариковая синяя", 12.5),
];

// цикл для получения количества покупаемых продуктов
for (let index = 0; index < products.length; index++) {
    const name = products[index].name;
    const price = products[index].price;

    products[index].ordered = +prompt(`Укажите количество продуктов '${name}', цена ${price}`, 0);
}

// цикл для расчета общей цены купленных продуктов
let totalPrice = 0;
for (let index = 0; index < products.length; index++) {
    totalPrice += products[index].calculateTotal();
}

alert(`Сумма Вашего заказа ${totalPrice}.`);

let isFreeShipping = totalPrice > 1000;
if (isFreeShipping) // иногда в условии используется только одна переменная.
{
    alert("Доставка будет бесплатной.");
}