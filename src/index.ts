let number = 5;
let number2 = 12;

let string = "hello";

let level;
level = "one";
level = 1;

function calculateTax(income: number): number | undefined {
  if (income > 500_000) {
    let tax = income * 0.4;
    return tax;
  }
}

let tax = calculateTax(600_000);
console.log(tax);

type Quantity = 50 | 100 | 200;
let q: Quantity = 100;
