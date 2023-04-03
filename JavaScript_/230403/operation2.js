////// 할당연산
let x = 10;
let y = 20;
x += 10;
console.log(x);

////// 단항연산
console.log(-(2));
console.log(-(-2));
console.log(+(-2));
console.log(+(+2));
console.log(+(+'2'));

////// 증감연산
let num = 3;
console.log(num);
console.log(++num);   // 선증가 후할당
console.log(--num);
console.log(num++);   // 선할당 후증가
console.log(num--);

////// 단락회로평가 ***
// true : 1
// false : 0
// and(&&) : 곱
// or(||) : 합
// not(!) : 부정

console.log(!"false") //false
console.log(!"0") //false

console.log(!false) //true
console.log(!0) //true

console.log('abc' / 2) //NaN

console.log(!!NaN) //false
console.log(!!undefined) //false
console.log(!!null) //false

let username = "";
username = username || "이름을 입력하지 않으신 분"
console.log(username) // "이름을 입력하지 않으신 분"

let username2 = "hailey";
username2 = username2 || "이름을 입력하지 않으신 분"
console.log(username2) // "hailey"

//or 은 하나라도 true라면 true로 처리 => 앞에꺼 나옴 / false일 경우 뒤에꺼 출력

////// 3항 연산자
// 조건식 ? 참일 경우 실행되는 표현식 : 거짓일 경우 실행되는 표현식
const price = 7000
const message1 = price >= 5000 ? '비싸요' : '저렴해요'
console.log(message1)

const message2 = price >= 9000 ? '비싸요' : price >= 7000 ? '적절해요' : '저렴해요';  // 중첩
console.log(message2)

const money = 5000;
const result = money > 10000 ? '부자' : '부를 바라는 자'
console.log(result);

const money2 = 50000;
const result2 = money2 > 100000 ? '초부자' : money2 > 10000 ? '부자' : '부를 바라는자';
console.log(result2);

////// 드모르간 법칙
// 드로므간 법칙을 이용하여 무조건 true가 되는 곳이나 무조건 false가 되는 구간을 발견할 수 있다. 또는 조건을 단순화 할 수 있다.
const z = 0;
const j = 1;

console.log(!(z || j) === (!z && !j));
console.log(!(z && j) === (!z || !j));

////// nullish 연산자(??)
// 최신 문법, 구식 브라우저는 폴리필(최신 문법을 구식 브라우저에서도 사용할 수 있게 해주는 것)이 필요하다.
let firstName = null;
let lastName = null;
let nickName = 'licat';

console.log(firstName ?? lastName); // null
console.log(firstName ?? lastName ?? nickName);   // licat
console.log(firstName ?? lastName ?? nickName ?? '익명 사용자');  // licat

let a = null;
let b = 10;
let c = null;

console.log(a ?? b ?? c); // 10

// null 값을 판단하여 다음 값으로 넘김, 값 발견 시 해당 값 출력

// 단락회로 평가와 nullish 연산자의 차이점
let height = 0;
// height 가 없다면 100을 넣고 싶음
console.log(height || 100);   // 100
console.log(height ?? 100);   // 0 => height가 null이 아니기 때문에 값 출력
// || : 0, null, undefined
// ?? : null, undefined

// falsy : 0, -0, "", null, undefined, NaN
// nullish : null, undefined
