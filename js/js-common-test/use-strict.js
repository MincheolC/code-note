"use strict"

let greeting;
greetign = {}

/*
 * ReferenceError: greetign is not defined 발생
 * "use strict" 가 아니면 {} 출력. window 또는 global 객체의 멤버 변수로 선언 됨.
 */
console.log(greetign);
