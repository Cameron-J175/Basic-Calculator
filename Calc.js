function calc() {
// Creates variables for operator, number 1, and number 2
const n1 = prompt(`First Number`);
const operator = prompt("Operator");
const n2 = prompt(`Second Number`);
// sets a variable equal to an HTML ID
let result = document.getElementById("ansSection");
// Checks what the given operator is then adds, subtracts, multiplies, or divides the numbers
if(operator == '+') {
// parseFloat() is used to convert strings to numbers to prevent concatenating
    answer = parseFloat(n1) + parseFloat(n2);
// Uses the result variable to contain the answer in a set area so document.write() doesn't overwrite the entire page
    result.innerHTML = answer
} else if(operator == '-') { 
    answer = n1 - n2;
    result.innerHTML = answer
} else if(operator == '*') {
    answer = n1 * n2;
    result.innerHTML = answer
} else if(operator == '/') {
    answer = n1 / n2;
    result.innerHTML = answer
}
}



