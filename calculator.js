
function addstr(s) {
    let display = document.getElementById('display');
    display.value = display.value + s;
}

function calc() {
    let display = document.getElementById('display');
    val = eval(display.value);
    display.value = val;
}

function clearDisplay() {
    let display = document.getElementById('display');
    display.value = ''

}

function deci() {
    let display = document.getElementById('display');
    let currentValue = display.value;
    if (currentValue.indexOf('.') === -1) {
        display.value = currentValue + '.';
    }
}
