// Object.entries (Symbol x)
const obj = {
  a: 'somestring',
  b: 42,
  [Symbol('secret')]: 'secret',
  print: () => 'print',
};

for (const [key, value] of Object.entries(obj)) {
  console.log(`${key}: ${value}`);
}

// Object.values()
console.log(Object.values(obj));