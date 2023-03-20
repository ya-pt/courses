let user1 = {
  login: "admin",
  email: "admin.com",

  showContactInfo: function () {
    // this указывает на user1
    console.log("мой логин: " + this.login + ", мой email: " + this.email);
  },
};

user1.showContactInfo();