const createError = require('http-errors');

let err = createError(500);
console.log(err.status)
console.log(err.headers)
console.log(err.message)
console.log(err.statusCode)


