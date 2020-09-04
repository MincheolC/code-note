const _ = require("lodash");

const clearAllSelectValuesExcept = (objects, expects) => {
  return Object.keys(objects)
    .filter((object) => expects.findIndex((expect) => expect === object) === -1)
    .reduce((obj, value) => ({ ...obj, [value]: null }), {});
};

console.log("clearAllSelectValuesExcept");
const testObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};
console.log(clearAllSelectValuesExcept(testObj, ["a", "c"]));

const sortObjectArrayDesc = (objects, key) => {
  const objs = _.cloneDeep(objects);
  objs.sort((a, b) => (a[key] > b[key] ? -1 : 1));
  return objs;
};
const objArr = [{ a: 1 }, { a: 2 }, { a: 3 }];
sortObjectArrayDesc(objArr, "a");
console.log("objArr ", objArr);
