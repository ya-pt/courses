function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

let operand1 = +prompt("Введите первое число: ");
let sign = prompt("Введите знак арифметической операции: + - * /");
let operand2 = +prompt("Введите второе число: ");
let result;

switch (sign) {
  case "+":
    result = add(operand1, operand2);
    break;
  case "-":
    result = sub(operand1, operand2);
    break;
  case "*":
    result = mul(operand1, operand2);
    break;
  case "/":
    result = div(operand1, operand2);
    break;
  default:
    console.error(sign + " - не является знаком арифметической операции.");
}

//default = undefined

if (result !== undefined) {
  console.log(`${operand1} ${sign} ${operand2} = ${result}`);
}
