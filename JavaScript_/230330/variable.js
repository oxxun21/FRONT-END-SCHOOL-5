// 변수는 저장공간으로 비유 X => 가리키는 요소로 비유하는 것이 맞다.
let i = 3;  // => x가 3을 가리키겠다.
console.log(i);

// 변수명 짓기
// - 변수이름은 $(document 표시), _(사용하지 않는 변수) 를 제외한 공백, 특수문자, 구두점(글의 여러 가지 경계를 구분하기 위해 사용되는 반점(,), 온점(.), 물음표(?) 등등…)을 사용할 수 없습니다.
// - 첫 글자는 숫자가 될 수 없습니다.
// - 대소문자를 구별합니다. (Class만 첫글자 대문자)
// - 예약어가 쓰일 수 없습니다.
// - 유니코드 문자도 사용할 수 있습니다. (사용 지양)
// - var, let, const의 키워드를 사용할 수 있습니다.

// - 변수를 선언 할 때는 var, let, const의 키워드를 사용할 수 있습니다. var, let 두 가지 키워드는 변수를, const 키워드는 변경할 수 없는 수 즉, 상수를 의미합니다.
// - var, let, const 키워드는 변수를 선언 할 때 한번만 사용합니다.
// - var 키워드는 초기화가 필요 없고 재할당이 가능합니다. 또한 생략할 수도 있습니다. 하지만 var 키워드가 생략된 변수는 엄격모드(strict mode)에서는 에러가 발생됨으로 권장되지 않습니다.
// - let과 const는 블록-레벨 선언으로 불리며, 선언된 코드 블록 밖에서 접근할 수 없으며 재정의가 불가능한 특징을 가지고 있습니다. 특히 const 의 경우에는 반드시 초기화가 필요합니다.

const x = 100;
let y = 1000;

// 1000줄 코드

console.log(x, y);

// scope, 유효범위
if (true) {
  let x = 100;
  console.log(x);
}
console.log(x);

if (true) {
  const x = 100;
  console.log(x);
}
console.log(x);

let s = 0
for (let i = 0; i < 11; i++) {
  s = s + i
}
console.log(s)

let ss = 0
for (let i = 0; i < 11; i++) {
  ss = ss + i
  const sss = ss / 10
  console.log(sss)
}

// let ss = 0
// for (let i = 0; i < 11; i++) {
//     ss = ss + i
//     const sss = ss / 10
// }
// console.log(sss)

const k = 10;
k = 12; // error

const kk = [];
kk.push(10) // error가 안나는 이유는 가리키고 있는 화살표는 그대로이기 때문에