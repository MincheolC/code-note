function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  const left = lost
    .filter((k) => {
      const index = reserve.indexOf(k);
      if (index !== -1) {
        reserve.splice(index, 1);
        return false;
      }
      return true;
    })
    .filter((k) => {
      const lindex = reserve.indexOf(k - 1);
      const rindex = reserve.indexOf(k + 1);

      if (lindex !== -1) {
        reserve.splice(lindex, 1);
        return false;
      }
      if (rindex !== -1) {
        reserve.splice(rindex, 1);
        return false;
      }
      return true;
    }).length;
  return n - left;
}
