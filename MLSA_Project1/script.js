let displayValue = "";
let baseValue = null; 
let isPowerOperation = false;

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    const action = e.target.getAttribute("data-action");
    const value = e.target.innerText;

    switch(action) {
      case "clear":
        displayValue = "";
        baseValue = null;
        isPowerOperation = false;
        break;
      case "percent":
        displayValue = (parseFloat(displayValue) / 100).toString();
        break;
      case "square":
        displayValue = (parseFloat(displayValue) ** 2).toString();
        break;
      case "power":
        baseValue = parseFloat(displayValue);
        displayValue = ""; // Clear display to enter exponent
        isPowerOperation = true;
        break;
      case "equals":
        if (isPowerOperation && baseValue !== null) {
          displayValue = (baseValue ** parseFloat(displayValue)).toString();
          baseValue = null;
          isPowerOperation = false;
        } else {
          try {
            displayValue = eval(displayValue).toString();
          } catch {
            displayValue = "Error";
          }
        }
        break;
      default:
        displayValue += value;
    }
    display.value = displayValue;
  });
});
