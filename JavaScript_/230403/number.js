let n1 = 10000;
let n2 = 10.123123;
let n3 = 31;
let n4 = 1001;
let n5 = 1111;

// 이진수
// 31 과 가장 가까운 2의 승수 => 32
// 32 => 100000
// 100000 - 1 => 11111

let s1 = '100000000';
let s2 = '100,000,000';

console.log(parseInt(n1));
console.log(parseInt(n2));  // ~~n2 도 소수점 사라짐
console.log(parseInt(n3));
console.log(parseInt(n4, 2)); // 이진법으로 바꾸는 것이 아니라 2진법으로 된 숫자를 10진법으로 바꾼다.
console.log(parseInt(n4, 8)); // 8진법으로 된 숫자를 10진법으로 바꾼다.
console.log(parseInt(n4, 10)); // 10진법으로 된 숫자를 10진법으로 바꾼다.
console.log(parseInt(n5));

console.log(n2.toFixed(3)); // .toFixed(소수점 자릿수) ****

////////////////////////////

console.log(Number(true));  // 1
console.log(Number(false)); // 0

console.log(parseInt(true));   // NaN
console.log(parseInt(false));   // NaN

console.log(Number(" ")); // 0
console.log(Number(""));  // 0
console.log(Number("hello")); // NaN
console.log(Number("10 20")); // NaN
console.log(Number("10abc")); // NaN

console.log(parseInt(" "));   // NaN
console.log(parseInt(""));   // NaN
console.log(parseInt("hello"));   // NaN
console.log(parseInt("10 20"));   // 10 (parseInt는 문자열 안에 숫자로 시작하면 숫자까지만 변환 가능) ****
console.log(parseInt("10abc"));   // 10

// console.log(Number(10 20));  error
console.log(Number("    10"));   // 10
console.log(Number("10   "));   // 10

console.log(parseInt("    10"));   // 10
console.log(parseInt("10   "));   // 10

// int는 정수, float는 실수
console.log(parseFloat("10.123"));

///////////////////////////

Infinity
Infinity > 100
Infinity < 100
  - Infinity
Infinity - Infinity // NaN, -* (기억도 안하셔도 됩니다.)

// Math ****
Math.abs(-10)
Math.ceil(10.3) // 올림
Math.floor(10.3) // 내림
Math.round(10.5) // 반올림
Math.round(10.4) // 반올림
Math.sqrt(100) // square root, 루트

Math.PI // 3.141592653589793
Math.min(1, 3, 5, 6, 7, 23, 9)
Math.max(1, 3, 5, 6, 7, 23, 9)

Math.min([1, 2, 3, 4, 5]) // 작동 X
Math.min(...[1, 2, 3, 4, 5]) // '...' 전개 구문

let values = [1, 2, 3, 4, 5]
let values2 = [6, 7, 8, 11, 10]
Math.max(...values)
Math.max(...values, ...values2)

// 0 이상 ~ 1 미만
Math.random()

// 1 ~ 10까지 난수 생성
parseInt(Math.random() * 10 + 1) // +1을 해주는 이유는 10을 포함하지 않기 때문에.

// math random 최솟값, 최댓값 지정
// 120 ~ 150
// (Math.random() * ( 최댓값 - 최솟값 )) + 최솟값

// 아래와 같이 있으나, 잘 사용되지 않는 메서드들이 있습니다.
Math.pow(2, 3)  // 2 ** 3

///////////////////////////

// 부동소수점 
// 컴퓨터에서 10진수 연산은 정확하지 않다.
// 0.1은 컴퓨터 입장에서 무한수다. => 해결 X, 모두 고려하고 계산
// 반복문 안에 0.1씩 증가하는 코드를 작성하게 된다면, 예측 불가능한 값이 생성되는 것을 인지해야한다.

// 0.1 + 0.2 (0.1씩 늘어갈 때)
// 0.30000000000000004
// 0.1 * 3
// 0.30000000000000004
// 0.3 + 0.6
// 0.8999999999999999

// 문제가 되는 경우
let width = 0.3;
let height = 0.6;
if (width + height >= 0.9) {
  console.log('실행해!')
}

//////////////////////////////////////

// BigInt
// JS에서 큰 숫자를 사용할 때에는 BigInt를 사용합니다.
// BigInt를 여러분 회사에서 사용하지 않을 수도 있습니다.
// The proposal belongs to ECMAScript 2020, which is the 11th edition
// console.log(Number.MAX_SAFE_INTEGER)  // 2^53 - 1

// 서비스는 항상 최악의 상황, 악성 유저에 대비
// 아래처럼 정상 작동이 되지 않는 경우들이 있습니다.
// 2**53 - 1
// 9007199254740991

9007199254740991 + 1
// 9007199254740992

9007199254740991 + 2
// 9007199254740992

9007199254740991 + 3
// 9007199254740994

9007199254740991 + 4
// 9007199254740996

// 제대로 나오게 하려면 n을 붙이세요!
9007199254740991n + 1n
// 9007199254740992n

9007199254740991n + 2n
// 9007199254740993n

9007199254740991n + 3n
// 9007199254740994n

9007199254740991n + 4n
// 9007199254740995n

BigInt(9007199254740991) + BigInt(1)
// 9007199254740992n

BigInt(9007199254740991) + BigInt(2)
// 9007199254740993n

BigInt(9007199254740991) + BigInt(3)
// 9007199254740994n

BigInt(9007199254740991) + BigInt(4)
// 9007199254740995n

// 참고
// BigInt(5) + 5n
// BigInt(5) + 5 // error
// BigInt(5) / 2n // 2n (소수 표현 안됨)
// BigInt("10") + BigInt("10") // 큰 값을 정수로 입력받을 때에는 string으로 처리해서 받아야 함

//////////////////////////////////////

// 상식으로 알아두면 좋은 것
let c = 10;
console.log(c.toString());
// console.log로 문자열을 출력하게 되면 따옴표가 없다.

// 10.String() => 10. 까지 소숫점으로 인식
(10).toString()   // => ()로 감싸야함