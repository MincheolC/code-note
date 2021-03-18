console.log('\n===== Interfaces =====');
interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
  // console.log(labeledObj.a); // compile ERROR
}

const obj = { a: 1, label: 'One' };
printLabel(obj);

/*
 * Optional Properties
 */
interface SquareConfig {
  color?: string; // OP
  width?: number; // OP
}

function createSquare(config: SquareConfig): { color: string; area: number } {
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

/*
 * Readonly
 */
interface Point {
  readonly x: number;
  readonly y: number;
}

const p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!
const a: number[] = [1, 2, 3, 4];
const ro: ReadonlyArray<number> = a;

let b: number[];
// b = ro; // Error
b = ro as number[];
b[1] = 3;

const obj2 = { colur: 'red', width: 100 };
mySquare = createSquare(obj2);
// mySquare = createSquare({ colur: 'red', width: 100 } as SquareConfig);

/*
 * Function Types
 */

interface SearchFunc {
  (source: string, subString: string): boolean;
}

const mySearch: SearchFunc = function (src: string, sub: string): boolean {
  const result = src.search(sub);
  return result > -1;
};

console.log('Function Types: ', mySearch('hello world', 'hello'));
/*
 * Indexable Types
 */
interface IUser {
  [userProp: string]: string | boolean;
}
const user: IUser = {
  name: 'Neo',
  email: 'thesecon@gmail.com',
  isValid: true,
  0: false,
};
console.log('[Indexable Types1]', user['name'], user['email'], user['isValid'], user[0], user['0']);

// 상위 타입
interface Animal {
  name: string;
}

// 하위 타입
interface Dog extends Animal {
  breed: string;
}

interface Okay {
  [x: number]: Dog;
  [y: string]: Animal;
}

const okay: Okay = {};
const animal: Animal = { name: 'animal' };
const dog: Dog = { name: 'dog', breed: 'haha' };
okay.a = animal;
okay[0] = dog;

console.log('[Indexable Types2]', okay.a, okay[0]);

interface IndexStringDic {
  [index: string]: number | string;
}
const myArray: IndexStringDic = {
  1: 'a',
  2: 'b',
};
myArray[2] = 'c';

console.log('[Indexable Types3] ', myArray);
