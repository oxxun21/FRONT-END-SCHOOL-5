// let과 const는 블록레벨 스코프를 가짐
// 스코프 : 변수에 접근할 수 있는 유효범위
// 전역, 함수, 블록(ES6) 스코프 존재
{
  let x = 10
  const y = 20
}

console.log(x, y);

// 1. 지역변수와 전역변수
let x = 100   // 블록 밖에서 선언하면 전역에서 접근할 수 있는 "전역변수"
function 함수(){
  let y = 20    // 블록 안에서 변수를 선언하면 밖에서 접근할 수 없는 "지역변수"
  console.log(x);   // 블록 안에 x변수가 없는데 올라가서 x를 찾아옴 => 스코프 체이닝 (스코프 체인을 따라 해당 영역에 변수가 없으면 계속해서 상위 스코프를 따라 올라감 -> 최상위 window(전역)까지 올라가도 변수가 없으면 error 발생)
}
함수()

let y = 10
function 함수1(){
  let y = 20
  function 함수2(){
    function 함수3(){
      console.log(y);
    }
    함수3()
  }
  함수2()
}
함수1() // 20
console.log(x); // 10
// 가장 가까운 스코프(블록) 값 출력

//
let a = 10
let b = 10
function 함수1() {
    let a = 20
    let b = 20
    function 함수2() {
        let a = 30
        console.log(a, b)
    }
    함수2()
}
함수1()

//
let y = 10
function 함수1(){
  let y = 20
  function 함수2(){
    function 함수3(){
      console.log(y);
    }
  }
}
함수1() // 호출 안하면 값 출력 XXX

// 함수의 호이스팅
// 호이스팅(함수나 변수를 끌어올려 주는 것처럼 보임)
// 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것을 의미
함수(10)

function 함수(x){
  return x + 100
}   
// 에러 X

함수(10)

let 함수 = x => x + 100  
// 에러 O

함수(10)

const 함수 = function(x){
  return x + 100
} 
// 에러 O