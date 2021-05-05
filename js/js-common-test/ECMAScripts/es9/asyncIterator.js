// Return Object
let range = {
  from: 1,
  to: 5,

  [Symbol.iterator] () {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      }
    }
  },

  [Symbol.asyncIterator] () {
    return {
      current: this.from,
      last: this.to,

      async next() { // async에 의해 자동으로 Promise로 감싸짐.
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (this.current <= this.last) {
          return { done: false, value: this.current++ }
        } else {
          return { done: true }
        }
      }
    }
  }
}

for (let value of range) {
  console.log(value);
}

(async () => {
  for await (let value of range) {
    console.log(value);
  }
})()

// Return Generator
range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() { // [Symbol.iterator]: function*()를 짧게 줄임
    for(let value = this.from; value <= this.to; value++) {
      yield value;
    }
  },

	async *[Symbol.asyncIterator]() { // [Symbol.asyncIterator]: async function*()와 동일
    for(let value = this.from; value <= this.to; value++) {

      // 값 사이 사이에 약간의 공백을 줌
      await new Promise(resolve => setTimeout(resolve, 1000));

      yield value;
    }
  }
};

for(let value of range) {
  console.log(value); // 1, 2, 3, 4, 5
}

(async () => {

  for await (let value of range) {
     console.log(value); // 1, 2, 3, 4, 5
  }

})();