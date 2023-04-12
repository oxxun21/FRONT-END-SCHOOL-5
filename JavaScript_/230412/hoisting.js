// 참고자료 : https://hanamon.kr/javascript-%ED%98%B8%EC%9D%B4%EC%8A%A4%ED%8C%85%EC%9D%B4%EB%9E%80-hoisting/
// JS의 모든 선언은 호이스팅(선언이 먼저 메모리에 저장)이 일어납니다.
// 그러나 let, const, class 이용한 선언문은 호이스팅이 되었지만 안된 것처럼 동작
// 이러한 현상은 일시적 사각지대(Temporal Dead Zone)에 빠지기 때문
// 중요한 포인트는 그렇다하여 호이스팅이 안된 것은 아니라는 것!
// 오류가 나는 이유는 var 키워드는 선언과 함께 undefined로 초기화
// let과 const는 초기화 되지 않는 상태로 선언만 메모리 저장

let foo = 1
{
  // TDZ
  console.log(foo);
  let foo = 2
}

let a = 10
if (true) {
  let a = 20
  if (true) {
    let a = 30  // 이 코드가 log 밑으로 가게 되면 에러발생 => 일시적 사각지대(a가 초기화 이전 사용되려고 하기 때문에)
    console.log(a);
  }
}

console.log(add1(10, 20)); // 30
console.log(add2(10, 20)); // 30
console.log(mul1); // undefined

// console.log(mul1(10, 20)); // not a function
// console.log(mul2); // Cannot access 'mul2' before initialization
// console.log(mul2(10, 20)); // 위와 같은 애러
// console.log(mul3) // mul3 is not defined, 호이스팅이 안되었기 때문
// console.log(test);
console.log(test2);

function add1(x, y) {
  return x + y;
}

function add2(x, y) {
  return x + y;
}

var mul1 = function (a, b) {
  return a * b;
};

let mul2 = function (a, b) {
  return a * b;
};

// let test = 100;
// var test2 = 100;
