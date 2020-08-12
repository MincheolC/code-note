const clearAllSelectValuesExcept = (objects, expects) => {
  return Object
    .keys(objects)
    .filter(object => expects.findIndex(expect => expect === object) === -1)
    .reduce((obj, value) => ({ ...obj, [value]: null}), {})
}

console.log('clearAllSelectValuesExcept')
const testObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
}
console.log(clearAllSelectValuesExcept(testObj, ['a', 'c']))