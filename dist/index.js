"use strict";
let number = 5;
let number2 = 12;
let string = "hello";
let level;
level = "one";
level = 1;
function calculateTax(income) {
    if (income > 500000) {
        let tax = income * 0.4;
        return tax;
    }
}
let tax = calculateTax(400000);
console.log(tax);
//# sourceMappingURL=index.js.map