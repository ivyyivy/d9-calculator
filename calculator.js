// 获取相关的DOM元素
const display = document.getElementById("display");
const keys = document.getElementById("grid-container");

// 记录用户输入的数字和运算符
let currentInput = "";
let currentOperator = null;
let lastInput = "";

// 用于清空当前输入的函数
function clearInput() {
    currentInput = "";
    display.innerText = "0";
}

// 处理用户按下数字键的函数
function handleNumberInput(number) {
    currentInput += number;
    display.innerText = currentInput;
}

// 处理用户按下运算符的函数
function handleOperatorInput(operator) {
    // 如果当前已经有一个运算符，则先计算上一次的结果
    if (currentOperator) {
        calculateResult();
    }

    // 记录当前的运算符和输入的数字
    currentOperator = operator;
    lastInput = currentInput;
    currentInput = "";
}

// 处理用户按下等号键的函数
function handleEqualInput() {
    calculateResult();
}

// 计算结果的函数
function calculateResult() {
    let result;
    const currentNumber = parseFloat(currentInput);
    const lastNumber = parseFloat(lastInput);

    // 根据当前的运算符计算结果
    switch (currentOperator) {
        case "+":
            result = lastNumber + currentNumber;
            break;
        case "-":
            result = lastNumber - currentNumber;
            break;
        case "*":
            result = lastNumber * currentNumber;
            break;
        case "/":
            result = lastNumber / currentNumber;
            break;
        default:
            return;
    }

    // 将结果显示在display框中，并更新相关变量的值
    display.innerText = result;
    currentInput = result.toString();
    currentOperator = null;
}

// 监听按键事件
keys.addEventListener("click", function (event) {
    const target = event.target;

    if (!target.matches("button")) {
        return;
    }

    const value = target.value;

    // 根据按键类型分别进行处理
    switch (value) {
        case "C":
            clearInput();
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            handleOperatorInput(value);
            break;
        case "=":
            handleEqualInput();
            break;
        default:
            handleNumberInput(value);
            break;
    }
});

