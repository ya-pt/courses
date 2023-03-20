//функция фабрика/фабричная функция - инициализирует новые объекты
//помогает избавиться от дублирования, когда нужно создать много новых объектов
//имя функции цесообразно нызывать со словом create

function createUser(login, email) {
  return {
    //нет имени объекта
    login: login,
    email: email,

    showContactInfo: function () {
      console.log("мой логин: " + this.login + ", мой email: " + this.email);
      //обязательно использовать ключевое слово this т.к(return)
    },
  };
}

let user1 = createUser("admin", "admin.com");
let user2 = createUser("user", "user.com");

user1.showContactInfo();
user2.showContactInfo();