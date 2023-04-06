let arr = [10, 20, 30, 40, 50]
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for in문은 객체랑 배열 순회할 때 사용 권장 (index를 가져오는 반복문)
let arr1 = [10, 20, 30, 40, 50]
let obj1 = { 'one': 10, 'two': 20 }
for (const i in arr1) {  // i가 인덱스를 가져와줘서 위에 처럼 선언 필요 X
  console.log(arr1[i]);
}

for (const i in obj1) {
  console.log(obj1[i]);   // key 값을 가져옴
}

// 일반적인 사용도 가능하긴 함
let s = 0
for (const i in '.'.repeat(10)) {
  s += parseInt(i)
}
console.log(s);

// for of (-> IE 지원 X)
let arr2 = [10, 20, 30, 40, 50]
let obj2 = { 'one': 10, 'two': 20 }
for (const item of arr2) {
  console.log(item);
}

let s1 = 0
for (const item of arr2) {
  s1 += item
}
console.log(s1);

// for (const item of obj2) {  // of 뒤에 iterable한 값이 나와야 한다. (순회 가능한, 순서가 있는) 
//   console.log(item);
// }   => 실행 X

// 문제
// https://codingdojang.com/scode/408?answer_mode=hide
s2 = [1, 3, 4, 8, 13, 17, 20]
for (let i = 0; i < s2.length; i++) {
  console.log(s2[i], s2[i + 1]) // 마지막 값을 확인해보세요.
  console.log(s2[i + 1] - s2[i])
}

for (let i = 0; i < s2.length - 1; i++) {
  console.log(s2[i], s2[i + 1]) // 마지막 값을 확인해보세요.
  console.log(s2[i + 1] - s2[i])
}

for (let i = 1; i < s2.length; i++) {
  console.log(s2[i - 1], s2[i]) // 마지막 값을 확인해보세요.
  console.log(s2[i] - s2[i - 1])
}

// for of문과 for in문에서는 const가 가능한 이유?
// => ECMAScript의 명세서에 따르는거임

// 점수 평균 구하기
let 수학점수 = [10, 99, 89, 70]
// step1 : 어디까지 반복문이 되고 안되는지 확인해야 함
// (수학점수[0] + 수학점수[1] + 수학점수[2] + 수학점수[3]) / 수학점수.length
// step2 : 패턴 찾아서 반복문 부분 구현 
let x = 0;
for (let i = 0; i < 수학점수.length; i++) {
  x += 수학점수[i];
}
console.log(x / 수학점수.length);

// 나이 평균 구하기
let user = [
  {
      "_id": "642e3071c61a23c70ae6076b",
      "index": 0,
      "age": 31,
      "name": "Hicks Garza",
      "gender": "male",
  },
  {
      "_id": "642e3071ecd6f90a87d64731",
      "index": 1,
      "age": 32,
      "name": "Ayers Harrington",
      "gender": "male",
  },
  {
      "_id": "642e3071cef9ddc131f047fb",
      "index": 2,
      "age": 39,
      "name": "Lamb Adams",
      "gender": "male",
  }
]

let result = 0;
for (let i = 0; i < user.length; i++) {
  result += user[i].age;
}
console.log(result / user.length);

let result2 = 0
for (let i of user) {
  result2 += i.age;
}
console.log(result2 / user.length);

// 강사님 답
let result3 = 0;
for (let i = 0; user.length; i++) {
  result3 += user.age;
}
console.log((result3 / user.length).toFixed(2));

////// age가 없는 경우 (심화) /////////
let user1 = [
  {
      "_id": "642e3071c61a23c70ae6076b",
      "index": 0,
      "age": 31,
      "name": "Hicks Garza",
      "gender": "male",
  },
  {
      "_id": "642e3071ecd6f90a87d64731",
      "index": 1,
      "age": 32,
      "name": "Ayers Harrington",
      "gender": "male",
  },
  {
      "_id": "642e3071cef9ddc131f047fb",
      "index": 2,
      "age": 39,
      "name": "Lamb Adams",
      "gender": "male",
  },
  {
      "_id": "642e3071cef9ddc131f047fb",
      "index": 2,
      "name": "Lamb Adams",
      "gender": "male",
  }
]

let s3 = 0
for (const i of user1) {
  console.log(i)
  console.log(i.age)  // 마지막 값이 undefined
  console.log(s3)   // 마지막 값이 102
  console.log('----------')
  s3 += i.age ?? 0  // 마지막 값이 undefined + 102
}
console.log((s3 / user1.length).toFixed(2))

s4 = 0
for (const i of user1.map((v, i) => v.age)) {
    if (!!i) {
        s4 += i
    }
}
console.log((s4 / user1.length).toFixed(2))

// step1
let s5 = 0
console.log(user1[0]);
console.log(user1[0].age);
console.log(s5);
console.log('----------')
s5 += user1[0].age ?? 0

//step2
console.log(user1[1]);
console.log(user1[1].age);
console.log(s5);
console.log('----------')
s5 += user1[1].age ?? 0
// ...[2], [3]

////
user.map(v => v.age).filter(v => !!v).reduce((a, c) => a + c, 0) // filter(v => !!v) :  v값이 있는 것만 (undefined, null, NaN은 사라짐)
