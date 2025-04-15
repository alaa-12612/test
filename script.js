const buttons = document.querySelectorAll("button");
const display = document.getElementById("writing_area");

let currentInput = "";
let firstOperand = null;
let operator = null;

function updateDisplay(value) {
  display.innerText = value ;
}

function calculate(a, b, op) {
  a = parseFloat(a);
  b = parseFloat(b);
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b !== 0 ? a / b : "Error";
    default: return b;
  }
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "C") {
      currentInput = "";
      firstOperand = null;
      operator = null;
    } else if (value === "DEL") {
      currentInput = currentInput.slice(0, -1);
    } else if (["+", "-", "*", "/"].includes(value)) {
      if (currentInput === "") return;
      firstOperand = currentInput;
      operator = value;
      currentInput += value; 
    } else if (value === "=") {
      if (firstOperand === null || operator === null) return;

     
      const secondOperand = currentInput.split(operator)[1];
      if (secondOperand === "") return;

      const result = calculate(firstOperand, secondOperand, operator);
      currentInput = result.toString();
      firstOperand = null;
      operator = null;
    } else {
      currentInput += value;
    }

    updateDisplay(currentInput);
  });
});
