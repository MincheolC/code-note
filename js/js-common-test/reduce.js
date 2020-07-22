const array = [[0, 1], [2, 3], [4, 5]];

// reduce
const reducedArray = array.reduce(
  (accumulator, currentValue, index) => {
    console.log(`${index + 1}. accumulator: ${accumulator}, currentValue: ${currentValue}`);
    return accumulator.concat(currentValue)
  },
  []
);
console.log(reducedArray);

// reduceRight
const reduceRightedArray = array.reduceRight(
  (accumulator, currentValue, index) => {
    console.log(`${index + 1}. accumulator: ${accumulator}, currentValue: ${currentValue}`);
    return accumulator.concat(currentValue)
  },
  []
);
console.log(reduceRightedArray);