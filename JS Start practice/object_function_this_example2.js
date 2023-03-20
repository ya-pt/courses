let user1 = {
  login: "admin",
  email: "admin.com",

  showContactInfo: null,
};

let user2 = {
  login: "user",
  email: "user.com",

  showContactInfo: null,
};

function show() {
  console.log("мой логин: " + this.login + ", мой email: " + this.email);
}

//одна и та же функция show, становится универсальной для свойства showContactInfo

user1.showContactInfo = show;
user2.showContactInfo = show;

//вызываем

user1.showContactInfo();
user2.showContactInfo();