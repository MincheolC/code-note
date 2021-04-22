// Basic
function recursion(n) {
  if (n === 1) return 1;
  return n + recursion(n - 1)
}

// Array 변형 없이 순회해서 sum
function recursionArrIndex(arr, index) {
  if (index === arr.length - 1) return arr[index];
  return arr[index] + recursionArrIndex(arr, index + 1);
}

// Array 변형 없이 순회해서 sum (sum 인자로 주기)
function recursionArrIndexSumParam(arr, index, sum) {
  if (index === arr.length) return sum;
  return recursionArrIndexSumParam(arr, index + 1, sum + arr[index]);
}

module.exports = {
  recursion,
  recursionArrIndex,
  recursionArrIndexSumParam,
};