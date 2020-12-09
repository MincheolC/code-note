function solution(n, times) {
  times.sort((a, b) => a - b);
  let left = 1;
  let right = n * times[times.length - 1];
  let answer = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let count = 0;

    for (let i = 0; i < times.length; i += 1) {
      count += Math.floor(mid / times[i]);
      if (count >= n) {
        answer = Math.min(mid, answer);
        break;
      }
    }

    if (count >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return answer;
}
