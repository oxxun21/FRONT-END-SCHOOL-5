// this에 바인딩되는 객체가 동적으로 결정되는 기명함수와 달리 화살표 함수의 경우 상위 스코프의 this를 가리킵니다 => Lexical this
// 기명 함수 안에서 정의된 함수의 경우 this는 전역을 바라보게 된다
// a 함수는 object 안에 함수임
const person = {
  name: 'lee',
  age: 25,
  a() {
    console.log(this);
    console.log(this.name);
    function b() {
      console.log(this);
      console.log(this.name);
      function c() {
        console.log(this);
        console.log(this.name);
      }
      c()
    }
    b()
  }
}
person.a()

//출력
// {name: 'lee', age: 25, a: ƒ}
// lee
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//

// a에서 this = person
// b에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person
// c에서 this = 상위스코프(상위에서 person을 보고있음) 즉 person
// 화살표는 자신을 호출하는 스코프를 따라올라감
const person1 = {
  name: 'lee',
  age: 25,
  a() {
    console.log(this);
    console.log(this.name);
    let b = () => {
      console.log(this);
      console.log(this.name);
      let c = () => {
        console.log(this);
        console.log(this.name);
      }
      c()
    }
    b()
  }
}
person1.a()

//출력
// {name: 'lee', age: 25, a: ƒ}
// lee
// {name: 'lee', age: 25, a: ƒ}
// lee
// {name: 'lee', age: 25, a: ƒ}
// lee

/////////////////////////////////
// 콜백의 this가 전역을 바라보고 있지 않은 경우도 있다 
[1, 2, 3].forEach(function(){console.log(this)})  // window
[1, 2, 3].forEach(function(){console.log(this)}, [10, 20, 30])  // (3) [10, 20, 30] * 3

// arr.forEach(callback(currentvalue[, index[, array]])[, thisArg]) => [, thisArg] => this로 사용되는 값

// 메서드 callbackFn에서 this로 사용할 값을 제공할 수도 있다
let 인세규정 = {
  책: 10,
  영상콘텐츠: 50
}

function 인세계산함수책(e) {
  return e * (this.책 / 100)
}

function 인세계산함수영상(e) {
  return e * (this.영상콘텐츠 / 100)
}

[100, 200, 300].map(인세계산함수책, 인세규정) // (3) [10, 20, 30]   인세규정이 this가 되는 상황
[100, 200, 300].map(인세계산함수영상, 인세규정)  // (3) [50, 100, 150]

// 1. 전역공간의 this는 window(node는 global) → 실제로는 window.globalThis, window.this 아닙니다.
//   [자바스크립트에서 `globalThis`의 소름끼치는 폴리필](https://ui.toast.com/weekly-pick/ko_20190503)  => this 메커니즘 소개 (추천 X)
// 2. 메서드로 호출한 경우 this는 멤버접근연산자 앞에 객체 (c.say의 c가 this)
// 3. 함수로 호출할 경우 this는 window(node는 global)
// 4. 화살표 함수의 경우 this는 상위스코프
// 5. 생성자 함수의 경우 this는 인스턴스
// 6. 콜백함수의 경우 this가 다르게 동작 할 수 있음

// 5. 예제
[100, 200, 300].forEach(function(v){
  console.log(v)
  console.log(this)
}) 