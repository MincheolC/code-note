/**
 * Event Loop는 Call Stack과 Callback Queue를 관찰하는 역할을 함. Call Stack이 비어있으면 Callback Queue에서 하나를 꺼내 stack에 쌓음.
 * Call Stack 비어야 Callback Queue가 실행되는지 확인
 */
let startTime = new Date().getTime();

setTimeout(() => {
  const endTime = new Date().getTime();
  console.log('callback called : ', endTime - startTime);
}, 500);

let a = 0;
for(let i=0; i<100000000; i+=1) {
  a += i;
  a -= i;
  a += i;
  a -= i;
  a += i;
  a -= i;
  a += i;
  a -= i;
  a += i;
  a -= i;
  a += i;
  a -= i;
  a += i;
}

/**
 * <결과>
 * for문이 없는 경우: 505 만에 호출 됨
 * for문이 있는 경우: 1489 만에 호출 됨
 */