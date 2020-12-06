function lilysHomework(arr) {
  const indexArr = [];
  const arrA = arr.slice();
  const arrD = arr.slice();
  let acount = 0;
  let dcount = 0;

  for (let i = 0; i < arrA.length; i += 1) {
    indexArr[arrA[i]] = i;
  }
  arr.sort((a, b) => a - b);
  const des = arr.slice().reverse();

  let temp;
  let j;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== arrA[i]) {
      temp = arrA[i];
      j = indexArr[arr[i]];
      arrA[i] = arrA[j];
      arrA[j] = temp;
      indexArr[arr[i]] = j;
      indexArr[temp] = j;
      acount += 1;
    }
  }

  for (let i = 0; i < arrD.length; i += 1) {
    indexArr[arrD[i]] = i;
  }
  for (let i = 0; i < des.length; i += 1) {
    if (des[i] !== arrD[i]) {
      temp = arrD[i];
      j = indexArr[des[i]];
      arrD[i] = arrD[j];
      arrD[j] = temp;
      indexArr[des[i]] = j;
      indexArr[temp] = j;
      dcount += 1;
    }
  }

  return Math.min(acount, dcount);
}


console.log(lilysHomework([2, 5, 3, 1]));
console.log(lilysHomework([3, 4, 2, 5, 1]));