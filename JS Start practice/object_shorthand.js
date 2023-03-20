//shorthand property - синтаксический сахар, который позволяет писать код более коротко
//shorthand method - синтаксический сахар, для короткой записи методов

function createUser(login, email) {
  return {
    //нет имени объекта

    //если свойство и параметр совпадают
    login, //login: login,
    email, //email: email,

    showContactInfo() {
      //showContactInfo: function ()
      console.log("мой логин: " + this.login + ", мой email: " + this.email);
      //обязательно использовать ключевое слово this т.к(return)
    },
  };
}

let user1 = createUser("admin", "admin.com");
let user2 = createUser("user", "user.com");

user1.showContactInfo();
user2.showContactInfo();