// Задание:
//Сделайте фабричный метод, который будет принимать два параметра firstName и lastName и создавать объект с двумя свойствами firstName и lastName.
// Сделайте так, чтобы функция print стала методом объекта, который создается через фабричную функцию.
// Используйте shorthand методы и shorthand свойства.        


function createUser(firstName, lastName){
    return{
        //нет имени объекта

    //если свойство и параметр совпадают
        firstName,//firstName: firstName,
        lastName,//lastName: lastName,
        print(){
            //print: function ()
            console.log(`First Name: ${this.firstName}. Last Name: ${this.lastName}.`)
            //обязательно использовать ключевое слово this т.к(return)
        },
    };
}

let user1 = createUser("Ivan", "Ivanov");
let user2 = createUser("Jhon", "Doe");

user1.print();
user2.print();