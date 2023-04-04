const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
////// filter : 블록에 true 값인 것만 출력
arr.filter((el) => el % 2 === 0)  // 짝수
arr.filter((el) => el % 2 === 0)  // 홀수

// 짝수의 합
// 문제 설명
// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 0 < n ≤ 1000
function solution(n) {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((v) => v % 2 === 0)
    .reduce((a, c) => a + c, 0);
}

// 모음제거
Array.from('hello world').filter(v => !['a', 'e', 'i', 'o', 'u'].includes(v))

////// reduce : 값 축적
const arr1 = [1, 2, 3, 4, 5]
arr.reduce((a, c) => a + c, 0)  // 견고한 코드를 위해 항상 초깃값을 넣어주어야 함 (,0) (초기값이 없는 경우 배열이 비었을 때 에러 발생)

////// includes : ()에 있는게 값에 있는가(true, false 반환)
const arr2 = ['hello', 'world', 'bye']
arr2.includes('bye')

////// join : 구분자를 기준으로 뭍여 넣음
const arr3 = ['hello', 'world', 'bye']
arr3.join('!')

const arr4 = ['010', '9999', '7777']  // ''감싸주지 않으면 2진법으로 인식할 수 있음
arr4.join('-')

// 0b100 : b, 바이너리
// 0o100 : o, 옥타
// 0x100 : x, 헥사