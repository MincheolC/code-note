function timelog(fn, n) {
  console.time(fn.name);
  fn(n);
  console.timeEnd(fn.name);
}

const arr = Array(1000000).fill(1);

function useFor(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  console.log(sum);
}

function useForUnroll(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 10) {
    sum += arr[i];
    sum += arr[i + 1];
    sum += arr[i + 2];
    sum += arr[i + 3];
    sum += arr[i + 4];
    sum += arr[i + 5];
    sum += arr[i + 6];
    sum += arr[i + 7];
    sum += arr[i + 8];
    sum += arr[i + 9];
  }
  console.log(sum);
}

timelog(useFor, arr);
timelog(useForUnroll, arr);