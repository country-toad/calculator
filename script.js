function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  switch(operator) {
    case '+':
      return add(a, b);
      break;
    case '-':
      return subtract(a, b);
      break;
    case '*':
      return multiply(a, b);
      break;
    case '/':
      return divide(a, b);
      break;
  }
}

let displayValue = 0;

function updateDisplay() {
  const display = document.querySelector('.display');
  display.textContent = displayValue;
};

function appendValue(value) {
    displayValue === '0' ? displayValue = value : displayValue += value;
}

const digits = document.querySelectorAll('.digits .digit');
digits.forEach(digit => {
  digit.addEventListener('click', function(e) {
    appendValue(this.textContent);
    updateDisplay();
  });
});

function clearAll() {
  displayValue = 0;
  updateDisplay();
}