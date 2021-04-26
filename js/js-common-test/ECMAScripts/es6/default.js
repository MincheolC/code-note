// Default parameter is evaluated when function is called
function append(value, array = []) {
  array.push(value)
  return array
}
console.log(append(1)); // [1]
console.log(append(2)); // [2]

// latter params can use former params as default
function greet(name, message = 'hello ' + name) {
  return message;
}

console.log(greet('charles'))