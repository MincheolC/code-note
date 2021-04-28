let handler = {
  get: (target, name) =>  name in target ? target[name] : 0,
}

// Basic
let p = new Proxy({ a: 1 }, handler);
console.log(p.a, p.b);

// No op forwarding proxy
let target = {}
p = new Proxy(target, {});
p.a = 2;

console.log(target.a);

// Validation
let validator = {
  set: (obj, prop, value) => {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }

    obj[prop] = value;
  }
}

let person = new Proxy({}, validator);
person.name = 'hello';
person.age = 1;
console.log(person)

// Function Proxy
target = () => 'I am the target';
handler = {
  apply: (target, receiver, ...args) => {
    console.log(target, receiver, args);
    return `${target()} I am the proxy ${args.join('')}`;
  },
};

p = new Proxy(target, handler);
console.log(p('charles'));