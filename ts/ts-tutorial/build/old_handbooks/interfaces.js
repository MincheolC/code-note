"use strict";
console.log('\n===== Interfaces =====');
function printLabel(labeledObj) {
    console.log(labeledObj.label);
    // console.log(labeledObj.a); // compile ERROR
}
const obj = { a: 1, label: 'One' };
printLabel(obj);
function createSquare(config) {
    const newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: 'black' });
const p1 = { x: 10, y: 20 };
// p1.x = 5; // error!
const a = [1, 2, 3, 4];
const ro = a;
let b;
// b = ro; // Error
b = ro;
b[1] = 3;
const obj2 = { colur: 'red', width: 100 };
mySquare = createSquare(obj2);
const mySearch = function (src, sub) {
    const result = src.search(sub);
    return result > -1;
};
console.log('Function Types: ', mySearch('hello world', 'hello'));
const user = {
    name: 'Neo',
    email: 'thesecon@gmail.com',
    isValid: true,
    0: false,
};
console.log('[Indexable Types1]', user['name'], user['email'], user['isValid'], user[0], user['0']);
const okay = {};
const animal = { name: 'animal' };
const dog = { name: 'dog', breed: 'haha' };
okay.a = animal;
okay[0] = dog;
console.log('[Indexable Types2]', okay.a, okay[0]);
const myArray = {
    1: 'a',
    2: 'b',
};
myArray[2] = 'c';
console.log('[Indexable Types3] ', myArray);
//# sourceMappingURL=interfaces.js.map