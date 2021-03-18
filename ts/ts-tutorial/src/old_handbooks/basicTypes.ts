/*
 * Value로부터 쉽게 타입 추론이 되면 타입 선언을 하지 않아도 됨.
 * (bigint, boolean, number, null, RegExp, string, symbol, undefined)
 */
console.log('===== Basic Tyeps =====');

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
const list: number[] = [1, 2, 3];
console.log('[array]', list);
// Tuple
const tuple: [string, number] = ['hello', 10];
console.log('[tuple]', tuple, tuple[0], tuple[1]);
// Enum
enum Color {
  Red = 1,
  Green,
  Blue,
}
const c: Color = Color.Green;
const colorName: string = Color[2];
console.log('[enum]', c, colorName);
// Unknown
const maybe: unknown = 'hello';
if (maybe === true) {
  const aBoolean: boolean = maybe;
  console.log('[unknown]', aBoolean);
} else if (typeof maybe === 'string') {
  const aString: string = maybe;
  console.log('[unknown]', aString);
}
// Any
const looselyTyped: any = {};
// const d = looselyTyped.a.b.c.d; // compile OK but runtime ERROR
