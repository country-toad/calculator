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
  a = parseFloat(a);
  b = parseFloat(b);
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
  isOperated: false,
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
    else if(display.isOperated) {
      display.value = input;
      display.isOperated = false;
    }
    else {
      display.value += input;
    }
  },
  appendDecimal: input => {
    if(display.operator && !display.value2.includes('.')) {
      display.value2 += input;
    }
    else if(!display.operator && !display.value.includes('.')) {
      display.value += input;
    }
  },
  clear: () => {
    display.value = '0';
    display.value2 = '';
    display.operator = '';
    display.isOperated = false;
    display.update();
  },
  equals: () => {
    if(display.operator == '/' && display.value2 == '0') { ``
      display.clear();
      display.value = 'bruh';
      display.update();
    }
    else if(display.operator && display.value2) {
      const answer = operate(display.operator, display.value, display.value2);
      display.clear()
      display.value = parseFloat(answer.toFixed(5)); //parseFloat removes leading zeroes
      display.isOperated = true;
      display.update();
    }
  },
  backspace: () => {
    if(display.isOperated) {
      display.clear();
    }
    else if(display.value2) {
      display.value2 = display.value2.slice(0, -1);
    } 
    else if (display.operator) {
      display.operator = '';
    }
    else if (display.value) {
      display.value = display.value.slice(0, -1);
    }
    if (!display.value) {
      display.value = '0';
    }
    display.update();
  }
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
    if(display.operator) {
      display.equals();
    }
    display.operator = this.textContent;
    display.update();
  });
});

const decimal = document.querySelector('.decimal');
decimal.addEventListener('click', function() {
  display.appendDecimal('.');
  display.update();
})

window.addEventListener('keydown', (e) => { 
  const button = document.querySelector(`button[data-key="${e.key}"]`);
  if(button.classList.contains('digit')) {
    display.append(button.textContent);
    display.update();
  }
  if(button.classList.contains('operator')) {
    if(display.operator) {
      display.equals();
    }
    display.operator = button.textContent;
    display.update();
  }

})

display.update();