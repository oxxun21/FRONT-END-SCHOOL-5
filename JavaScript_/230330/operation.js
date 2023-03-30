// 산술연산
const x = 10;
const y = 3;
console.log(x + y);
console.log(x - y);
console.log(x / y);
console.log(x * y);
console.log(x ** y);
console.log(x % y);

// 논리연산
const z = true; // 1
const j = false;  // 0
console.log(z && j);  // 곱 and
console.log(z || j);  // 합 or
console.log(!z);
console.log(!!z);

console.log(z & j);
console.log(z | j);

 // 매우 중요하지 않습니다.
  // console.log(3 & 5);
  // 0011
  // 0101
  // ----
  // 0001
  // console.log(3 | 5);
  // 0011
  // 0101
  // ----
  // 0111

  // 비트연산자 중에서 유일하게 조금 중요한 연산(부정연산)
  // console.log(~3)
  // console.log(~~3)
  // console.log(~~3.14)
  // console.log(parseInt(3.14))
  // console.log(parseInt('3.14'))
  // console.log(parseInt('3.14abc'))

// 비교 연산
const a = 3;
const b = 7;
console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);
console.log(a == b); // ← 변수의 타입을 확인하지 않는다.
console.log(a === b); // ← 변수의 타입을 확인한다.
console.log(a != b);
console.log(a !== b);

// 논리연산 예제
// https://codingdojang.com/scode/350#answer-filter-area
let answer = 0;
for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    answer += i
  }
}
console.log(answer)