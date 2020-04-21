function solution(N) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (N < 1 || N > 2147483647) {
    throw new Error('out of range');
  }

  let n = N;
  let remainder = n % 2;
  let wasItOne = remainder === 1;
  let isCounting = false;
  let gapSize = 0;
  const gaps = [];

  // eslint-disable-next-line no-bitwise
  n >>= 1;

  while (n > 0) {
    remainder = n % 2;
    if (wasItOne && remainder === 0) {
      isCounting = true;
    }

    if (!wasItOne && remainder === 1) {
      isCounting = false;
      if (gapSize > 0) {
        gaps.push(gapSize);
        gapSize = 0;
      }
    }

    if (isCounting && remainder === 0) {
      gapSize += 1;
    }
    wasItOne = remainder === 1;
    // eslint-disable-next-line no-bitwise
    n >>= 1;
  }

  if (gaps.length === 0) {
    return 0;
  }

  const longestGap = gaps.reduce((longest, gap) => (longest > gap ? longest : gap), 0);
  return longestGap;
}
