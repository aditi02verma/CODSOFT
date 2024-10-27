let currentInput = "";
let previousInput = "";
let operator = "";

// Append number to the current input
function appendNumber(number) {
    if (number === '.' && currentInput.includes('.')) return; // Prevent multiple decimals
    currentInput = currentInput + number;
    updateDisplay(currentInput);
}

// Choose an operator (+, -, *, /)
function chooseOperator(op) {
    if (currentInput === "") return; // Prevent choosing operator with no input
    if (previousInput !== "") {
        calculate(); // Calculate if there's a previous input
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
}

// Update the calculator display
function updateDisplay(value) {
    document.getElementById("display").innerText = value || "0";
}

// Clear the display and reset all values
function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay("0");
}

// Delete the last character of the current input
function deleteNumber() {
    currentInput = currentInput.toString().slice(0, -1);
    updateDisplay(currentInput);
}

// Perform the calculation based on the operator
function calculate() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(curr)) return; // Check if inputs are valid numbers

    switch (operator) {
        case "+":
            result = prev + curr;
            break;
        case "-":
            result = prev - curr;
            break;
        case "*":
            result = prev * curr;
            break;
        case "/":
            result = curr !== 0 ? prev / curr : "Error"; // Prevent division by zero
            break;
        default:
            return;
    }
    currentInput = result.toString();
    operator = "";
    previousInput = "";
    updateDisplay(currentInput);
}
