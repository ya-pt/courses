// confirm - функция для отображения модального окна с текстом и двумя кнопками - Ok and Cancel
// При нажатии на Ok возвращает true, Cancel false

let confirmed = confirm("Вы точно хотите удалить файл?");

//или if (confirmed == true)
if (confirmed) {
  alert("Файл удален.");
} else {
  alert("Отмена удаления файла.");
}
