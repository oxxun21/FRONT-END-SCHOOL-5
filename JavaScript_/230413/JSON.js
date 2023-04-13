// JSON(JavaScript Object Notation)은 자바스크립트에서 객체를 표현하는 형식으로 데이터를 표현한것
// {
//   "squadName": "슈퍼히어로",   => 홑따옴표 '' X
//   "members": [
//     {
//       "name": "아이언맨",
//       "age": 29,
//       "본명": "토니 스타크"
//     },
//     {
//       "name": "헐크",
//       "age": 39,
//       "본명": "부르스 배너"
//     }
//   ]
// }

// JSON.parse(): JSON문자열을 자바스크립트 객체로 변환합니다. (문자열 => 객체)
// JSON.stringify() : 자바스크립트 객체를 JSON문자열로 변환합니다. (객체 => 문자열)

const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
console.log(obj)  // {result: true, count: 42}

// 배열로도 변환 가능
const json = '[1, 2, 3]';
const obj = JSON.parse(json);
console.log(obj); // [1, 2, 3]

const json = {result: true, count: 42}
const string = JSON.stringify(json)
string  // '{"result":true,"count":42}'

// JSON을 이용한 깊은 복사 (아예 다른 주소값을 가진 [10, 20, 30]이 된다)
let l = [10, 20, 30];
let a = JSON.parse(JSON.stringify(l));
a[0] = 1000;
console.log(l);

let l = [10, 20, 30];
let a = JSON.parse(`${l}`);
a[0] = 1000;
console.log(l);         // => error