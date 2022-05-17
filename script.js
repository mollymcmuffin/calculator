function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(a,b,operator){
    switch (operator){
        case '+':
            return add(a,b);

        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '÷':
            return divide(a,b);
    };
}

function updateOperand(){
    const operand = this.textContent;
    const currentOperand = document.querySelector('[data-current-operand');
    currentOperand.textContent = `${currentOperand.textContent}${operand}`;
    console.log(currentOperand);
}

function updateOperator(){
    const operator = this.textContent;
    const previousOperand = document.querySelector('[data-previous-operand');
    const currentOperand = document.querySelector('[data-current-operand');
    const currentOperator = document.querySelector('[data-input-operator]');
    let output;
    if (currentOperator.textContent !== ''){
        previousOperand.textContent = operate(+previousOperand.textContent, +currentOperand.textContent, currentOperator.textContent);
       
    }
    else{
        previousOperand.textContent = currentOperand.textContent;
        
    }
    currentOperator.textContent = `${operator}`;
    currentOperand.textContent = '';
    
    console.log(operator);
}

function clearInput(){
    const currentOperand = document.querySelector('[data-current-operand');
    const previousOperand = document.querySelector('[data-previous-operand');
    const operator = document.querySelector('[data-input-operator');
    previousOperand.textContent = '';
    currentOperand.textContent = '';
    operator.textContent = '';
}

const numbers = document.querySelectorAll('[data-number]');
numbers.forEach(number => number.addEventListener('click', updateOperand))

const operators = document.querySelectorAll('[data-operator]');
operators.forEach(operator => operator.addEventListener('click', updateOperator))

const clear = document.querySelector('[data-clear]');
clear.addEventListener('click', clearInput);