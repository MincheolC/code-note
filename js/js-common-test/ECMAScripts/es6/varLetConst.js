// let, const hoisting X

console.log(x);
try {
  console.log(y); // Error
} catch (e) {
  console.error(e)
}

try {
  console.log(z); // Error
} catch (e) {
  console.error(e)
}

var x = 1;
let y = 2;
const z = 3;

