function solution(priorities, location) {
  let target = location;
  let first;
  let answer = 1;

  while (priorities.length > 0) {
    first = priorities.shift();
    if (priorities.some(value => value > first)) {
      priorities.push(first);
    } else {
      if (target === 0) break;
      answer += 1;
    }

    if (target === 0) {
      target = priorities.length - 1;
    } else {
      target -= 1;
    }
  }

  return answer;
}
