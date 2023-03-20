let user1 = {
  login: "admin",
  email: "admin.com",
  created: "27.12.22",
};

//цикл for in используется для перебора всех ключей(свойств), которые есть в объекте

for (const key in user1) {
  console.log(`Свойство ${key} значение ${user1[key]}`);
}

//user1[key] - берем значение по свойству с этим именем