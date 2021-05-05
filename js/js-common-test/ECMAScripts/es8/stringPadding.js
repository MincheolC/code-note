// Masking ID
const id = 'mincheol';
const start3Chars = id.slice(0, 3);
const maskedId = start3Chars.padEnd(id.length, '*');

console.log(maskedId)

// Padding
const str = 'logging...';
const prefix = '[info] ';
console.log(str.padStart(str.length + 6));
console.log(str.padStart(str.length + prefix.length, prefix));

const numbers = [1, 2, 10, 100, 5010];
numbers.forEach(number => console.log(number.toString().padStart(4, '0')));