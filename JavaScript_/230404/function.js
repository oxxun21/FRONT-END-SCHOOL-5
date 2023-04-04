// 1. 재사용성이 높아짐
// 2. 유지보수가 용이
// 3. 구조 파악에 용이

// 함수의 일반적인 형태
// 함수 선언문
// 파선아실 (파라미터는 선언할때, 아규먼트는 실제 값)
function one(a, b) {  // () input 값 들어감, 변수명이 들어감, 파라미터
  let z = a + b
  return z ** 2 // output
}
console.log(one(7, 3))  // 아규먼트

const two = (a, b) => (a + b) ** 2
console.log(two(7, 3));

// 이름 없이 선언하는 함수
// 함수 표현식
const three = function(a, b) { 
  let z = a + b
  return z ** 2 
}
console.log(three(7, 3));

// 콜백함수
// 함수를 아규먼트로 전달해서 나중에 사용
function four(a, b, c){
  let z = c(a, b) + c(a, b)
  return z * 2
}
console.log(four(7, 3, one)); 
// 블록 내에 함수를 사용할 경우 함수의 순수성을 해칠 수 있다.
// 외부에서 직접 값을 가져오는 것을 지양 => 인자 값을 넣어서 예측 가능하게 해줘야 한다.

// 읽어볼만한 문헌 : https://ko.javascript.info/function-basics

function hello(para){
  console.log(para);
  console.log('hello');
  return 100
}
console.log(hello(10));   // 10 hello 100
let x = console.log('hello');
x // undefined (return 값이 없다)

// 메서드는 클래스 안에 들어간 함수
// .을 찍어 접근할 수 있는 함수면 메서드
// 함수를 호출할 수 있는 이름은 결국 변수임
let y = console.log
y('hello')  // hello

// return이 없으면 return undefined가 생략되어 있는 것
function hello(){
  console.log('hello');
}

function hello(){
  console.log('hello');
  return
}

function hello(){
  console.log('hello');
  return undefined
}
// 위 세개의 코드는 같은 것임

// return을 중간에 만나면 만난 곳에서 실행 종료
const a = [10, 20, 30, 40]
a.forEach(el => {
  console.log(el);
  return
  console.log('world');
})
// world가 실행 안되는 거지 값은 10, 20, 30, 40 나옴
// forEach는 return을 하더라도 1회 반복만 종료, 전체 반복 종료는 아님

//////////////////////

function 함수1(a, b, c){
  return a + b + c
}
함수1(10, 20, 30, 40)  // error 발생 X
함수1(10, 20)   // NaN (error가 아님)

function 함수2(a = 10, b = 20, c = 30){ // 초기값 지정
  return a + b + c
}
함수2(1, 1)

function 함수3(a = 10, b = 20, c = 30){ // 초기값 지정
  return a + b + c
}
함수2(a = 1, c = 1) // a랑 b에 들어감 (a, c X)

// 아래와 같은 식별 이슈가 있을 경우 object로 넘깁니다 (roro 기법)
function runPython(user, time, code, lv){}
runPython('people', 100, 'function...', 3)

function runPython({user, time, code, lv}){}
runPython({
  user: 'people', 
  time: 100, 
  code: 'function...', 
  lv: 3
})  // 식별을 쉽게 하기 위함

function runPython({  // 기본값 설정
  user = '',
  time = 0,
  code = '',
  lv = 0}){}

/////////////////////////////

// 화살표 함수
// 읽어볼만한 문헌 : https://ko.javascript.info/arrow-functions-basics
function 함수1(x, y) {
  return x + y
}
// 위 함수를 화살표 함수로 작성하면 아래와 같습니다.
let 함수1 = (x, y) => x + y

// 만악 함수 실행시 전달하는 인자가 한 개라면 소괄호를 생략할 수 있습니다.
let 함수2 = x => x + 10

// 화살표 함수 내부에서 한 줄 표현식만 반환한다면 return 키워드를 생략해도 됩니다.
let 함수3 = x => x + 10

let 결과 = 함수3(2);

console.log(결과);

// 즉시실행함수
(function() {
  console.log('이 함수는 만들어지자마자 바로 실행됩니다!');
})();