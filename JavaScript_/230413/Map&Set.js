// Set : 모든 타입의 값을 저장하는 객체 자료형의 한 종류
// 집합, 합집합, 교집합, 차집합
// 실무에서는 많이 사용이 안되지만
// 알고리즘 문제에서는 거의 필수로 사용되는 자료형

let a = new Set('aabbbccccdd') // 중복을 제거
a.size

회사게시판 = ['이호준', '이호준', '이호준', '이호준', '이호준', '이호준', '이호준', '김연하', '김연하', '최흥석', '이나영']
let 게시자 = new Set(회사게시판)

// 문제 1 : 몇 명이 게시판에 게시물을 썼나요? (각각의 인원이 유일해야 합니다.)
게시자.size

// 문제 2 : 각각 몇 개의 게시물을 작성하였나요?
for (const i of 게시자) {
    console.log(i, 회사게시판.filter(e => e === i))
}

for (const i of 게시자) {
    console.log(i, 회사게시판.filter(e => e === i).length)
}

// 초급자 분들에게 권장 X
let map = new Map()
for (const i of 회사게시판){
  map.set(i, (map.get(i) || 0) + 1)
}

// 1번째 순회 i에 '이호준'
map.set(i, (map.get(i) || 0) + 1)

let map = new Map()
map.get('이호준') // undefined

map.set('이호준', 1) // 최종

// 2번째 순회 i에 '이호준'
map.set(i, (map.get(i) || 0) + 1)

map.set('이호준', 2) // 최종

// set 연습
let b = new Set('aabbbccccdd')
b.size        // 크기
b.has('a')    // 가지고 있나 -> 불리언
b.has('f')
b.add('z')    // 요소 추가

b.forEach((value, value, set) => {})  // array와 다르게 index가 없음

for (const i of b){
  console.log(b);
}

let c = new Set('aabbbccccdd'.split(''))

////////////////////////////////////
let d = new Set('abc')
let e = new Set('cde')
// 교집합
let cro = [...a].filter(e => b.has(e))

// 합집합
let union = new Set([...d].concat(...e))    // => [...d, ...e]

// 차집합
let dif = [...d].filter(v => !e.has(v))

// set, map, object, array가 이터러블 객체인가? 순서는 보장하나?
// 이터러블한 객체란? 순회가 가능한 객체 (set, map, array, string), for of로 순회 돌려보면 알 수 있다
// object는 순회가 불가능해서 이터러블하진 않다 => 순서를 보장하나(어떤 상황에도 순서가 바뀌지 않는가)? 넣은 순서대로 순회할 수 있냐로 본다면 obj는 순서를 보장하지 않음

// https://school.programmers.co.kr/learn/courses/30/lessons/120903
// 교집합의 갯수 구하는 문제
function solution(s1, s2) {
  return s1.length + s2.length - new Set([...s1, ...s2]).size;
}

function solution(s1, s2) {
  s1 = new Set(s1)
  s2 = new Set(s2)
  let cro = [...s1].filter(e => s2.has(e))
  return cro.length;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120891

function solution(order) {
  const mySet = new Set([3, 6, 9]);
  return String(order) // '29423' 
      .split("") // ['2', '9', '4', '2', '3']
      .filter((num) => mySet.has(parseInt(num))).length;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/120852
function solution(n) {
  let answer = [];

  let i = 2;
  while (i <= n) {
      if (n % i === 0) {
          answer.push(i);
          n = n / i;
      } else {
          i++;
      }
  }

  return [...new Set(answer.sort((a, b) => (a > b ? 1 : -1)))];
}