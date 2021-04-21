function a(str, name, age, ...rest) {
  console.log(str, name, age, rest);
  return (n) => console.log(n);
}

const name = 'charles';
const age = 12;

// Tagged Function #1
a`hello ${name} world ${age}`(42);

function myOnReadyStateChangeHandler(name, age) {
  console.log('myOnReadyStateChangeHandler', name, age);
}

function myOnReadyStateUnChangeHandler(name, age) {
  console.log('myOnReadyStateUnChangeHandler', name, age);
}

function POST(url, name, age) {
  return (cb) => cb(name, age);
}

// Tagged Function #2
POST`http://foo.org/bar
     Content-Type: application/json
     { "foo": ${name},
       "bar": ${age}}`(myOnReadyStateUnChangeHandler);
