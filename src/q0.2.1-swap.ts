// Q.
// 정수형 변수 두 개의 값을 바꾸는 swap() 함수를 작성하라.
// 원래는 포인터를 사용하는 예제이지만 자바스크립트에는 포인터가 없으므로 포인터는 생략

// A1.
// 자바스크립트로 swap()을 구현하는 건 불가능하다.
// 아래는 스코프 밖의 x, y에 접근하는 방법으로 구현한 버전.
// 전역변수명(x, y)이 변할 경우 작동하지 않으므로 이렇게 사용해선 안 된다.
const swap = (_x: number, _y: number): void => {
  let temp: number;
  temp = _x;
  _x = _y;
  _y = temp;
  x = _x;
  y = _y;
};

// A2.
// swap()을 구현하지 않고도 구조분해 할당을 이용하면 손쉽게 변수의 값을 맞바꿀 수 있다.
let a: number = 3;
let b: number = 6;
[a, b] = [b, a];

// App
let x: number = 0;
let y: number = 3;
swap(x, y);

console.log(x, y); // 3 0
console.log(a, b); // 6 3
