const x: number = parseFloat(prompt("Please enter a number")!);
const op: string = prompt("Please enter + or - or / or * or ^")!;
const y: number = parseFloat(prompt("Please enter a number")!);

function calculator(x: number, op: string, y: number): void {
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
