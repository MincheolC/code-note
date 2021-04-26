/* Example 1
  the object/Map previously referenced by Variable is stored inside the array
  therefore it won't be garbage-collected
*/

// Memory Leak Occurs
let leakObjEx1 = {a: 1}
let leakMapEx1 = new Map([['a', 1]]);
const arrEx1 = [leakObjEx1, leakMapEx1];

leakObjEx1 = null;
leakMapEx1 = null

console.log('[Map, Object] Still can access leakObjEx1 leakMapEx1: ', arrEx1[0], arrEx1[1]);

// Use WeakMap to save obj
const weakMapEx1 = new WeakMap();
leakObjEx1 = { a: 1 };
weakMapEx1.set(leakObjEx1, leakObjEx1);
console.log('[weakMap] Before Remove: ', weakMapEx1.get(leakObjEx1));
leakObjEx1 = null;
console.log('[weakMap] After Remove: ', weakMapEx1.get(leakObjEx1));




