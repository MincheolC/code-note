// for ... in not appear
let obj = {};

obj[Symbol('a')] = 'a';
obj[Symbol.for('b')] = 'b';
obj['c'] = 'c';
obj.d = 'd';

for (let i in obj) {
  console.log(i); // logs "c" and "d"
}

// Object.getOwnPropertySymbols()
console.log(Object.getOwnPropertySymbols(obj))


// Symbol & Object.assign
let id = Symbol('id');
let user = {
  [id]: 123,
};
let clone = Object.assign({}, user);

console.log(user[id], clone[id]);

// Symbol.for(key) - if not exit, create
let idx = Symbol.for('idx');
let idxAgain = Symbol.for('idx');

console.log(idx === idxAgain)

// Symbol.keyFor(sym) -  returns a name by a global symbol.
let globalSymbol = Symbol.for("name");
let localSymbol = Symbol("name");

console.log(Symbol.keyFor(globalSymbol)); // name, global symbol
console.log(Symbol.keyFor(localSymbol)); // undefined, not global

// Every Symbol has description
console.log(localSymbol.description); // name
console.log(globalSymbol.description); // name