// function lamda this scope
const lambda01 = {
  value: 1,
  toString: () => this.value
}
const func01 = {
  value: 1,
  toString: function () {
    return this.value;
  }
}

// Arrow Function은 this 바인딩을 갖지 않음. this는 일반적인 인자/변수와 동일하게 취급.
function lambda02() {
  this.value = 2;
  return {
    value: 3,
    toString: () => this.value
  }
}

function func02() {
  this.value = 2;
  return {
    value: 3,
    toString: function () {
      return this.value;
    }
  }
}

// function call this
function fCall(param) {
  this.value = 1;
  console.log(this);
}

console.log(lambda01)
console.log(lambda01 + '')
console.log(func01)
console.log(func01 + '')
console.log(lambda02().toString())
console.log(func02().toString())
fCall({ number: 2})
fCall.call({ number: 2 })

