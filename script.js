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
    
    let result;
    switch (operator){
        case '+':
            result = add(a,b);
            break;

        case '-':
            result = subtract(a,b);
            break;
        case '*':
            result = multiply(a,b);
            break;
        case '÷':
            result = divide(a,b);
            break;
    };
    console.log(result);
    result = Math.floor(result*100)/100;
    return result;
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

function calculate(){
    const previousOperand = document.querySelector('[data-previous-operand');
    const currentOperand = document.querySelector('[data-current-operand');
    const currentOperator = document.querySelector('[data-input-operator]');
    currentOperand.textContent = operate(+previousOperand.textContent, +currentOperand.textContent, currentOperator.textContent);
    previousOperand.textContent = '';
    currentOperator.textContent = '';
}

function clearInput(){
    const currentOperand = document.querySelector('[data-current-operand');
    const previousOperand = document.querySelector('[data-previous-operand');
    const operator = document.querySelector('[data-input-operator');
    previousOperand.textContent = '';
    currentOperand.textContent = '';
    operator.textContent = '';
}

function backspace(){
    const currentOperand = document.querySelector('[data-current-operand');
    currentOperand.textContent =  `${currentOperand.textContent.slice(0,-1)}`;
}

const numbers = document.querySelectorAll('[data-number]');
numbers.forEach(number => number.addEventListener('click', updateOperand))

const operators = document.querySelectorAll('[data-operator]');
operators.forEach(operator => operator.addEventListener('click', updateOperator))

const clear = document.querySelector('[data-clear]');
clear.addEventListener('click', clearInput);

const equal = document.querySelector('[data-equal]');
equal.addEventListener('click', calculate);

const del = document.querySelector('[data-delete]');
del.addEventListener('click', backspace);