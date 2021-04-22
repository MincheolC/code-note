function getDiffAbs(a, b) {
  return Math.abs(a - b);
}

function closestNumbers(arr) {
  arr.sort((a, b) => a - b);
  let min = getDiffAbs(arr[0], arr[1]);
  let pairs = [arr[0], arr[1]];
  for (let i = 1; i < arr.length - 1; i += 1) {
    const diff = getDiffAbs(arr[i], arr[i + 1]);
    if (diff < min) {
      pairs = [arr[i], arr[i + 1]];
      min = diff;
    } else if (diff === min) {
      pairs = [...pairs, arr[i], arr[i + 1]];
    }
  }
  return pairs;
}

console.log(closestNumbers([-20, -3916237, -357920, -3620601, 7374819, -7330761, 30, 6246457, -6461594, 266854]));