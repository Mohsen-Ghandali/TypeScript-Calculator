"use strict";
const x = parseFloat(prompt("Please enter a number"));
const op = prompt("Please enter + or - or / or ^");
const y = parseFloat(prompt("Please enter a number"));
function calculator(x, op, y) {
    switch (op) {
        case "+": {
            document.write(`<h1>${x + y}</h1>`);
            break;
        }
        case "-": {
            document.write(`<h1>${x - y}</h1>`);
            break;
        }
        case "/": {
            document.write(`<h1>${x / y}</h1>`);
            break;
        }
        case "*": {
            document.write(`<h1>${x * y}</h1>`);
            break;
        }
        case "^": {
            document.write(`<h1>${Math.pow(x, y)}</h1>`);
            break;
        }
        default:
            document.write("45<h1>not successful</h1>");
            break;
    }
}
calculator(x, op, y);
