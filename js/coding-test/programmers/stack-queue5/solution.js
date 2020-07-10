function isRazor(a, b) {
  return a === '(' && b === ')';
}

function solution(arrangement) {
  const stack = [];

  let blockCount = 0;
  let prev = arrangement[0];
  stack.push(prev);

  for (let i = 1; i < arrangement.length; i += 1) {
    const cur = arrangement[i];
    if (isRazor(prev, cur)) {
      stack.pop();
      blockCount += stack.length;
    } else if (cur === ')') {
      stack.pop();
      blockCount += 1;
    } else {
      stack.push(cur);
    }
    prev = cur;
  }
  return blockCount;
}
