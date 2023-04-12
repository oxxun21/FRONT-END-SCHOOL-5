// 재귀함수
// 내가 나를 호출하는 것
// 반복문으로 반복할 수 있는 거은 재귀함수로 만들 수 있다
// 재귀함수로 만들 수 있는 것은 반복문으로도 만들 수 있다

// 메모리 낭비가 심함 => 실무에서 사용 X(반복문 쓰셈), 알고리즘 문제(팰린드롬)에서 간혹 재귀를 호출할 일이 생김

// 1. factorial
result = 1
for (let i = 2; i < 6; i++) {
  result *= i
}
result

function factorial(n) {
  if (n <= 1) {  // 종료 조건이 없으면 무한 반복
    return n
  }
  return n * factorial(n - 1)
}
//           | return(내려갔다가)  | 최종값(내려간거에서 다시 올라오면서 값 계산)
factorial(5) | 5 * factorial(4) | 5 * 24 == 120
factorial(4) | 5 * factorial(3) | 4 * 6 == 24
factorial(3) | 5 * factorial(2) | 3 * 2 == 6
factorial(2) | 5 * factorial(1) | 2 * 1 == 2
factorial(1) | 1

// 누적합 (일일이 순회하지 않고 구할 수 있는 값이기 때문에 둘 다 비효율적임)
// 소수 구하는 문제 같은 곳에서 2중 for문 사용하는 것도 비효율적임 (수식 이용 하셈)
result = 0
for (let i = 1; i < 1001; i++) {
  result += i
}
result

function sigma(n) {
  if (n <= 1) {
    return n
  }
  return n * sigma(n - 1)
}
sigma(1000)

// 이렇게 수식 사용하는게 이득
const n = 1000
console.log(n * (n + 1) / 2);

// 2. 문자열 뒤집기
result = ''
for (const i of 'hello world') {
  result = i + result
}
result

// 'h + '' -> 'e' + 'h' -> 'l' + 'eh' 순서로 순회

function reverse(txt) {
  if (txt.length <= 1) {
    return txt
  }
  return reverse(txt.slice(1)) + txt[0]
}
reverse('hello world')

// 호출            |  return                |  최종값
reverse('hello')  | reverse('ello') + 'h'  | 'olle' + 'h' == 'olleh'
reverse('ello')   | reverse('llo') + 'e'   | 'oll' + 'e' == 'olle'
reverse('llo')    | reverse('lo') + 'l'    | 'ol' + 'l' == 'oll'
reverse('lo')     | reverse('o') + 'l'     | 'o' + 'l' == 'ol'
reverse('o')      | 'o'

// 3. 팰린드롬
// https://kk3june.tistory.com/83 포스팅된 코드입니다.
const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
input.shift();
let answer = '';

// 1. 주어진 문자열이 팰린드롬인지 확인하기 위한 isPalindrome 함수 생성
function isPalindrome(str, cur, cnt) {
  // 1-1. 팰린드롬 여부를 확인하기 위해서는 index의 역순에 위치한 문자열과 비교해야 하므로
  // 결과적으로 문자열의 절반까지만 확인을 하면 된다. => length 변수는 재귀함수를 실행될 마지막 index
  // 문자열이 홀수이면 중간에 숫자가 하나 비기 때문에 Math.floor 사용하여 소수점 버림
  const length = Math.floor(str.length / 2);
  if (cur >= length) {
    return answer += '1' + ' ' + cnt + '\n'
  } else {
    if (str[cur] === str[str.length - cur - 1]) isPalindrome(str, cur + 1, cnt + 1)
    else return answer += '0' + ' ' + cnt + '\n'
  }
}

// 2. 주어진 입력 값 문자열을 순차적으로 isPalindrome 함수의 인자로 넣어서 팰린드롬 여부 판단
input.forEach(el => isPalindrome(el, 0, 1));

// 3. 2번 코드에서 팰린드롬 여부에 따른 결과값을 answer 변수에 string 형태로 추가했으므로 console로 출력
console.log(answer);