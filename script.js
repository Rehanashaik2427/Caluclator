// This function clears all the values
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// This function displays the values
function display(value) {
    document.getElementById("result").value += value;
}
 
// This function removes the last entered digit
function removeLastDigit() {
    var currentValue = document.getElementById("result").value;
    document.getElementById("result").value = currentValue.slice(0, -1);
}

// This function evaluates the expression and returns the result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
