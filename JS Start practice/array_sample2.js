let emailString = prompt("Введите e-mail адреса через запятую");
let emails = emailString.split(", ");

//удаляем почту "no-reply@gmail.com", если такая есть в списке
let noReplyIndex = emails.indexOf("no-reply@gmail.com");
if (noReplyIndex != -1) {
  emails.splice(noReplyIndex, 1);
}

//если почты "admin@gmail.com" нет в массиве - добавляем её

if (emails.indexOf("admin@gmail.com") == -1) {
  emails.push("admin@gmail.com");
}

for (let email of emails) {
  console.log(`Отправка письма на адрес ${email}`);
}

alert(`Отправлено ${emails.length} писем`);