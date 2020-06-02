const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(parseInt(m.join(""), 10));
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };

  permute(inputArr);

  return result;
};

function buildPrimeArr(length) {
  const arr = Array(length).fill(1);
  arr[0] = 0;
  arr[1] = 0;
  for (let i = 2; i * i < length; i += 1) {
    let j = 1;
    while (i * j < length) {
      arr[i * j] = 0;
      j += 1;
    }
  }
  return arr.reduce((arr, value, index) => {
    if (value) arr.push(index);
    return arr;
  }, []);
}

function solution(numbers) {
  const splitedNumbers = Array.from(numbers).sort((a, b) => b - a);
  const maxNumber = parseInt(splitedNumbers.join(""), 10);
  const primeArr = buildPrimeArr(maxNumber);
  console.log(primeArr);
  for (let i = 1; i < splitedNumbers.length; i += 1) {
    console.log(splitedNumbers.slice(0, i));
  }
}
