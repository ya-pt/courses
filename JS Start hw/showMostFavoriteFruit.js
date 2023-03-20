// Задание:
// Реализуйте метод showMostFavoritedFruit.
//Метод должен отображать фрукт, который чаще всего указывали как любимый на основе данных по пользователям из массива users.

// массив сгенерирован с помощью https://next.json-generator.com/
let users = [
  {
    balance: "1345.79",
    age: 21,
    name: {
      first: "Carey",
      last: "Schwartz",
    },
    company: "UXMOX",
    email: "carey.schwartz@uxmox.info",
    favoriteFruit: "banana",
  },
  {
    balance: "13.79",
    age: 21,
    name: {
      first: "Carey",
      last: "Schwartz",
    },
    company: "UXMOX",
    email: "carey.schwartz@uxmox.info",
    favoriteFruit: "banana",
  },
  {
    balance: "1250.89",
    age: 24,
    name: {
      first: "Golden",
      last: "Clements",
    },
    company: "EWAVES",
    email: "golden.clements@ewaves.io",
    favoriteFruit: "strawberry",
  },
  {
    balance: "3637.94",
    age: 23,
    name: {
      first: "Francis",
      last: "Hebert",
    },
    company: "XPLOR",
    email: "francis.hebert@xplor.biz",
    favoriteFruit: "apple",
  },
  {
    balance: "1106.44",
    age: 31,
    name: {
      first: "Hale",
      last: "Cross",
    },
    company: "EARTHPURE",
    email: "hale.cross@earthpure.us",
    favoriteFruit: "strawberry",
  },
  {
    balance: "2502.43",
    age: 25,
    name: {
      first: "Delores",
      last: "Sykes",
    },
    company: "ASSITIA",
    email: "delores.sykes@assitia.com",
    favoriteFruit: "strawberry",
  },
  {
    balance: "3651.54",
    age: 21,
    name: {
      first: "Ryan",
      last: "Bolton",
    },
    company: "MOLTONIC",
    email: "ryan.bolton@moltonic.biz",
    favoriteFruit: "apple",
  },
  {
    balance: "3261.11",
    age: 30,
    name: {
      first: "Trevino",
      last: "Mullins",
    },
    company: "TERRASYS",
    email: "trevino.mullins@terrasys.org",
    favoriteFruit: "strawberry",
  },
  {
    balance: "2340.54",
    age: 32,
    name: {
      first: "Brewer",
      last: "Vargas",
    },
    company: "QIMONK",
    email: "brewer.vargas@qimonk.co.uk",
    favoriteFruit: "apple",
  },
  {
    balance: "1736.91",
    age: 24,
    name: {
      first: "Newman",
      last: "Wynn",
    },
    company: "VISALIA",
    email: "newman.wynn@visalia.name",
    favoriteFruit: "apple",
  },
];

// solution example 1

function showMostFavoriteFruit1() {
  let mostPopularFavoriteFruit = [];
  let allKindsFruits = [];
  let fruitsRepetitions = {};
  //create an array with the values of all favoriteFruit without duplicate values
  for (const user of users) {
    if (!allKindsFruits.find((x) => x == user.favoriteFruit)) {
      allKindsFruits.push(user.favoriteFruit);
    }
  }
  let counter;
  let maxCount = 0;

  console.log(allKindsFruits);

  //count the number of repetitions of each fruit
  for (let x = 0; x < allKindsFruits.length; x++) {
    let thisFruit = allKindsFruits[x];
    counter = 0;

    for (const user of users) {
      if (user.favoriteFruit === thisFruit) {
        counter++;
      }
    }

    if (maxCount < counter) {
      maxCount = counter;
    }

    fruitsRepetitions[thisFruit] = counter;
  }

  console.log(fruitsRepetitions);

  // find the fruit (fruits) that was most often indicated as a favorite
  for (const fruit in fruitsRepetitions) {
    if (fruitsRepetitions[fruit] == maxCount) {
      mostPopularFavoriteFruit.push(fruit);
    }
  }

  console.log(`Most popular favorite fruit(s): ${mostPopularFavoriteFruit}`);
}

showMostFavoriteFruit1();

// solution example 2 *more complex

function showMostFavoriteFruit2() {
  //***Метод new Set(arr) создает новую коллекцию. Объект set может содержать в себе только уникальные элементы.

  //***Метод map позволяет применить заданную функцию для каждого элемента массива.
  //При этом не изменяет исходный массив, а *возвращает измененный.

  //***Метод массива reduce() позволяет превратить массив в любое другое значение с помощью переданной функции-колбэка и начального значения.
  //Функция-колбэк будет вызвана для каждого элемента массива, и всегда должна возвращать результат.

  //***Метод массива . filter() позволяет получить новый массив, отфильтровав элементы с помощью переданной колбэк-функции.
  //Колбэк-функция будет вызвана для каждого элемента массива и по результату функции примет решение включать этот элемент в новый массив или нет.

  //***Метод Math.max возвращает максимальное число из группы чисел, переданных в функцию.
  //Если в функцию ничего не передано, то будет возращено -Infinity.

  //***Метод Object. values() возвращает массив, чьи элементы это значения перечисляемых свойств найденных в объекте.

  //***Метод Object.entries() возвращает массив, состоящий из массивов, каждый из которых содержит ключ и значение пары свойств объекта.

  const allKindsFruits = [...new Set(users.map((user) => user.favoriteFruit))];

  const fruitsRepetitions = allKindsFruits.reduce((obj, fruit) => {
    const count = users.filter((user) => user.favoriteFruit === fruit).length;
    obj[fruit] = count;
    return obj;
  }, {}); //начальное значение obj - {}

  const maxCount = Math.max(...Object.values(fruitsRepetitions));
  const mostPopularFavoriteFruit = Object.entries(fruitsRepetitions)
    .filter(([fruit, count]) => count === maxCount)
    .map(([fruit]) => fruit);
  console.log(`Most popular favorite fruit(s): ${mostPopularFavoriteFruit}`);
}

showMostFavoriteFruit2();