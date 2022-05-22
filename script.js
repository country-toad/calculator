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
  a = parseInt(a);
  b = parseInt(b);
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

let display = {
  value: '0',
  value2: '',
  operator: '',
  update: () => {
    const selectDisplay = document.querySelector('.display');
    selectDisplay.textContent = display.value + display.operator + display.value2;
  },
  append: input => {
    if(display.operator) {
      display.value2 += input;
    }
    else if(display.value === '0') {
      display.value = input;
    } 
    else {
      display.value += input;
    }
  },
  clear: () => {
    display.value = '0';
    display.value2 = '';
    display.operator = '';
    display.update();
  },
  equals: () => {
    if(display.operator && display.value && display.value2) {
      const operatedValue = operate(display.operator, display.value, display.value2);
      display.clear()
      display.value = operatedValue;
      display.update();
    }
  },
}

const digits = document.querySelectorAll('.digit');
digits.forEach(digit => {
  digit.addEventListener('click', function() {
    display.append(this.textContent);
    display.update();
  });
});

const operators = document.querySelectorAll('.operator');
operators.forEach(operator => {
  operator.addEventListener('click', function() {
    display.operator = this.textContent;
    display.update();
  });
});

display.update();