const obj = {
  a: 1,
  set name(newName) {
    this._name = newName;
  },
  get name() {
    return this._name;
  }
}
// Getter & Setter
obj.name = 'charles';
console.log(obj.name);

const obj2 = {...obj};
obj2.name = 'doge'
console.log(obj.name, obj2.name);

// getOwnPropertyDescriptor
console.log(Object.getOwnPropertyDescriptor(obj, 'a'));
