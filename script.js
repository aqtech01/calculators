const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let operator = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      calculate();
    } else if (value === 'C') {
      clear();
    } else if (isOperator(value)) {
      handleOperator(value);
    } else {
      currentInput += value;
      updateDisplay();
    }
  });
});

function isOperator(value) {
  return ['+', '-', '*', '/'].includes(value);
}

function handleOperator(newOperator) {
  if (operator) {
    calculate();
  }
  operator = newOperator;
  currentInput += operator;
  updateDisplay();
}

function calculate() {
  const [operand1, operand2] = currentInput.split(operator);
  let resultValue;

  switch (operator) {
    case '+':
      resultValue = parseFloat(operand1) + parseFloat(operand2);
      break;
    case '-':
      resultValue = parseFloat(operand1) - parseFloat(operand2);
      break;
    case '*':
      resultValue = parseFloat(operand1) * parseFloat(operand2);
      break;
    case '/':
      resultValue = parseFloat(operand1) / parseFloat(operand2);
      break;
    default:
      resultValue = 'Error';
  }

  currentInput = resultValue.toString();
  operator = '';
  updateDisplay();
}

function clear() {
  currentInput = '';
  operator = '';
  updateDisplay();
}

function updateDisplay() {
  result.value = currentInput;
}