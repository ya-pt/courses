import { TextField } from "@mui/material";

const Search = (props) => {
  const { onChange, value } = props; //С помощью destructuring, из объекта props извлекаются два свойства: onChange и value.

  return (
    <TextField // предоставляет поле ввода текста для поиска
      variant="standard" // вариант отображения поля ввода
      label="search" // label: определяет текст, который будет отображаться в качестве метки над полем ввода
      type="search" // type: определяет тип поля ввода, добавляет удаление ⨉
      value={value} // value: определяет текущее значение поля ввода, которое будет отображаться
      onChange={onChange}
      fullWidth // Свойство fullWidth в компоненте TextField из библиотеки Material-UI позволяет задать ширину поля ввода на всю доступную ширину контейнера.

      sx={{// стили jsx
        mb: '1.5rem' //margin-bottom
      }}
    />
  ); // onChange: определяет функцию обратного вызова, которая будет вызываться при изменении значения в поле ввода
};

export default Search;