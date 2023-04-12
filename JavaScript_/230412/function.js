// 4월 4일 코드 참고
// 실무에선 "코파일럿" 사용 추천

// 1. object 처럼 사용되는 함수의 특성
function 함수(a, b){
  return a + b
}

function 함수2(a, b, c){
  const z = a + b + c
  return z
}

function 함수3(a, b, c, d, e, f){
  return a
}

console.dir(함수1)
console.dir(함수2)
console.dir(함수3)
// length가 파라미터의 수인 것을 확인

// 함수에 무언가를 추가할 순 없나?
함수['location'] = 'jeju'
// => 실행 O, log로는 바뀐게 안보이는데 dir로 보면 추가되어 있음
// array, object, function가 모두 같은 방식으로 접근하거나 값을 변경할 수 있음

함수['name'] = 'jejufuntion'
console.dir(함수) 
// console.dir(jejufuntion) => 호출 X

함수['length'] = 5
console.dir(함수)   // 변경 X

// 2. argument가 순서대로 들어가는 함수의 특성
function 함수(a=10, b=20, c=30){
  return a + b + c
}

함수()  // 60
함수(100)   // 150
함수(100, 200)  // 330
함수(100, 200, 300)   // 600
함수(c=300) // 350 => 순서대로 들어감
함수(a=100, c=300)  // 430

// 3. roro 기법 원리 설명
// roro 기법 : 입력되는 아규먼트가 매우 많은 아래 함수의 경우 호출 하는 쪽에서 어떤 값이 들어가는지 명확히 알기 어렵고 읽기도 어렵다.
window.addNewControl("Title", 20, 50, 100, 50, true);
// 함수(a=100, b=200, c=300)식으로 쓸 수 있지만 아규먼트 순서가 바뀌게 되면 파라미터 순서대로 들어가서 망함

// python 형식입니다.
window.addNewControl(
  title="Title",
  xPosition=20,
  yPosition=50,
  width=100,
  height=50,
  drawingNow=true
);

// roro 기법은 언제 사용하나
function 로그인정보({
  회원등급 = 'Gold',
  글쓰기 = true,
  글읽기 = true,
  채널관리 = true,
  백업 = '1주일 이내 가능',
  소셜로그인여부 = true
}){
  console.log('...함수 기능...');
  console.log(회원등급, 글쓰기, 글읽기, 채널관리, 백업, 소셜로그인여부);
}

로그인정보({
  회원등급: 'Silver',
  소셜로그인여부: false,
  백업: '3일 이내 가능'
})  // 순서가 바뀌고 중간에 생략된 값도 존재
// Silver true true true 3일 이내 가능 false => 순서대로 잘 적용됨

// 원리 (왜 = 쓰고 : 씀?)
let one
let two
let three

let four = {one, two, three}  // four => {one: undefined, two: undefined, three: undefined}
// 이렇게(변수 값을 object 안에 넣으면 변수명이 key가 되고 변수값이 object의 value가 되는 문법) 사용할 수 있게 된 것도 최근임

let {one, two, three} = {one: 10, two: 20, three: 30}
let {one, two, three} = {two: 20, one: 10, three: 30}

let {one:10, two, three} = {two: 20, one: 10, three: 30} // => 에러
// 왼쪽 one, two, three는 변수 (객체의 key, value 값이 아님)
let {one=10, two, three} = {two: 20, one: 10, three: 30} 
// one=10을 사용해서 변수에 할당


// 로그인정보()  => error
로그인정보({})  // 에러 안남
// 로그인정보() 를 에러 안나게 하려면 어떻게 해야될까?
function 함수({
  a = 1,
  b = 2,
  c = 3
} = {}){
  console.log(a, b, c);
  return a + b + c
}

함수()
함수({})
함수({b: 100})

// 참고삼아서만 알아두세요.
// let {one = 1, two = 2} = {one:100}
// let {one = 1, two = 2} = {}
// let {a=10, b=20, c=30} = undefined

// early-return
// https://www.howdy-mj.me/javascript/early-return