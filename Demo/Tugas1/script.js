let displayValue = "0";

function appendToDisplay(value) {
    const display = document.getElementById("display");

    if (value === '+/-') {
        // Handle negation
        displayValue = displayValue.startsWith('-') ? displayValue.slice(1) : '-' + displayValue;
    } else {
        if (displayValue === "0") {
            displayValue = value;
        } else {
            displayValue += value;
        }
    }

    display.value = displayValue;
}

function clearDisplay() {
    displayValue = "0";
    document.getElementById("display").value = displayValue;
}

function calculate() {
    const display = document.getElementById("display");

    try {
        if (displayValue.includes("^")) {
            let parts = displayValue.split("^");
            displayValue = Math.pow(parseFloat(parts[0]), parseFloat(parts[1])).toString();
        } else {
            displayValue = eval(displayValue).toString();
        }
    } catch (error) {
        displayValue = "Error";
    }

    display.value = displayValue;
}
