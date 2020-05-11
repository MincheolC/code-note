function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  const arr = Array.from(A);
  arr.sort((a,b) => (a-b));

  const lastIndex = arr.length - 1;
  const max1 = arr[0] * arr[1] * arr[lastIndex];
  const max2 = arr[lastIndex] * arr[lastIndex - 1] * arr[lastIndex - 2]

  return (max1 > max2) ? max1 : max2 ;
  // const positives = [];
  // const negatives = [];

  // for (let i=0; i<A.length; i+=1) {
  //     if(A[i] > 0) {
  //         positives.push(A[i])
  //     } else {
  //         negatives.push(A[i])
  //     }
  // }

  // let totalArr
  // positives.sort((a,b) => (a-b))
  // if (negatives.length > 1) {
  //     negatives.sort((a,b) => (a-b))
  //     totalArr = negatives.concat(positives);
  // } else {
  //     totalArr = positives;
  // }

  // let maxValue = 1;
  // for (let i=0; i<3; i+=1) {
  //     maxValue *= totalArr[totalArr.length - 1 - i];
  // }
  // console.log(totalArr, maxValue)
  // return maxValue
}