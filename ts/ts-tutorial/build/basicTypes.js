"use strict";
/*
 * Value로부터 쉽게 타입 추론이 되면 타입 선언을 하지 않아도 됨.
 * (bigint, boolean, number, null, RegExp, string, symbol, undefined)
 */
// Boolean
const isDone = false;
console.log('[boolean]', isDone);
// Number & bigInt
const decimal = 10;
const hex = 0xf00d;
const binary = 0b1010;
const octal = 0o744;
const big = 100n;
console.log('[number]', decimal, hex, binary, octal, big);
// String
const color = 'blue';
const sentence = `i like ${color}`;
console.log('[string]', sentence);
// Array
const list = [1, 2, 3];
console.log('[array]', list);
// Tuple
const tuple = ['hello', 10];
console.log('[tuple]', tuple, tuple[0], tuple[1]);
// Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
const c = Color.Green;
const colorName = Color[2];
console.log('[enum]', c, colorName);
// Unknown
const maybe = 'hello';
if (maybe === true) {
    const aBoolean = maybe;
    console.log('[unknown]', aBoolean);
}
else if (typeof maybe === 'string') {
    const aString = maybe;
    console.log('[unknown]', aString);
}
// Any
const looselyTyped = {};
const d = looselyTyped.a.b.c.d;
//# sourceMappingURL=basicTypes.js.map