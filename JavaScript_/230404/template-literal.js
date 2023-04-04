const x = 10;
const y = 20;
console.log(`x 값은 ${x}이고 y 값은 ${y}이고 두개를 곱한 값은 ${x * y}입니다.`);  // 템플릿 리터럴 중괄호 안에 연산을 넣는 것을 권하지 않음

const x2 = 10;
const y2 = 20;
const result = x2 * y2;
console.log(`x 값은 ${x2}이고 y 값은 ${y2}이고 두개를 곱한 값은 ${result}입니다.`);   // 변수명만 넣기를 권장함

console.log(`h
e
l
l
o`);    // 개행 가능

// 이렇게 되면 가독성이 떨어짐
if (true) {
  if (true) {
      if (true) {
          console.log(`h
e
l
l
o
`)
      }
  }
}