const display = document.getElementById('display');
let result = '';
let operator = '';
let previousValue = '';
let resetNext = false;

// 处理数字按钮点击事件
function handleNumberClick(number) {
    if (resetNext) {
        display.innerText = '';
        resetNext = false;
    }
    if (display.innerText === '0' && number !== '.') {
        display.innerText = '';
    }
    display.innerText += number;
}

// 处理操作符点击事件
function handleOperatorClick(op) {
    previousValue = display.innerText;
    operator = op;
    resetNext = true;
}

// 处理等号点击事件
function handleEqualClick() {
    const currentValue = display.innerText;
    let calculation;

    switch (operator) {
        case '+':
            calculation = Number(previousValue) + Number(currentValue);
            break;
        case '-':
            calculation = Number(previousValue) - Number(currentValue);
            break;
        case '*':
            calculation = Number(previousValue) * Number(currentValue);
            break;
        case '/':
            calculation = Number(previousValue) / Number(currentValue);
            break;
        default:
            return;
    }

    result = calculation;
    display.innerText = result;
    resetNext = true;
}

// 处理清零操作
function handleResetClick() {
    result = '';
    operator = '';
    previousValue = '';
    display.innerText = '0';
    resetNext = false;
}

// 处理按钮点击事件
function handleClick(event) {
    const keyValue = event.target.value;
    if (!isNaN(keyValue)) {
        handleNumberClick(keyValue);
    } else if (keyValue === '.' && !display.innerText.includes('.')) {
        handleNumberClick(keyValue);
    } else if (keyValue === '+' || keyValue === '-' || keyValue === '*' || keyValue === '/') {
        handleOperatorClick(keyValue);
    } else if (keyValue === '=') {
        handleEqualClick();
    } else if (keyValue === 'AC') {
        handleResetClick();
    }
}

// 添加按钮点击事件监听器
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', handleClick));
