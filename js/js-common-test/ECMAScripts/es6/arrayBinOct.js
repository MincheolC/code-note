// Array copy (copyWithin - high performance)
let arr = Array.of(0, 0, 0, 0 ,0);
let copied = Array.from(arr);

arr.fill(7, 3)
arr.copyWithin(0, 3, 5);

console.log(copied, arr);

// Hex, Binary and Octal Literals
console.log(0x1f7 === 503, 0b111110111 === 503, 0o767 === 503);