const value = 'two'

switch (value) {
  case 'one':
    console.log('hello one');
    break;
  case 'two':
    console.log('hello two');
    break;
  case 'three':
    console.log('hello three');
    break;
  default:
    console.log('hello default');
    break;
}

const value2 = 'four'

switch (value2) {
  case 'one':
    console.log('hello one');
    break;
  case 'two':
    console.log('hello two');
    break;
  case 'three':
    console.log('hello three');
    break;
  default:
    console.log('hello default');
    break;
}

switch (new Date().getDay()) {
  case 0:
    console.log('일요일');
    break;
  case 1:
    console.log('월요일');
    break;
  case 2:
    console.log('화요일');
    break;
  case 3:
    console.log('수요일');
    break;
  case 4:
    console.log('목요일');
    break;
  case 5:
    console.log('금요일');
    break;
  case 6:
    console.log('토요일');
    break;
  // default는 견고한 코드를 위해 써주는 것이 좋음 (받아오는 값이 변수면 default 꼭 넣자)
}

// 여러줄 복사하고 싶을 때에 
// window : Alt + Shift + 위아래
// mac : option키와 shift키 누르고 방향키

// 같은 단어 찾고 싶을 때 
// window : Ctrl + D
// mac : cmd + D

// 같은 모든 단어 
// window : Ctrl + Shift + l 입니다.
// mac : cmd + Shift + l 입니다.

// 자동정렬
// window : Ctrl + a, Ctrl k + Ctrl + f(Ctrl누른 상태여야 합니다.)
// mac : cmd + a, cmd k + f

// 전체 줄 선택
// window : 컨트롤 L 커서 있는 줄 전체선택

// switch 안쓰고 비슷한 동작 구현
const 요일 = new Date().getDay()
const 요일객체 = {
  0: '일요일',
  1: '월요일',
  2: '화요일',
  3: '수요일',
  4: '목요일',
  5: '금요일',
  6: '토요일',
}

console.log(요일객체[요일] ?? 'hello')  // default 처리가 안되긴 함

const 요일2 = 10
const 요일객체2 = {
  0: '일요일',
  1: '월요일',
  2: '화요일',
  3: '수요일',
  4: '목요일',
  5: '금요일',
  6: '토요일',
}

// nullish
console.log(요일객체2[요일2] ?? 'hello')
// 단락평가
console.log(요일객체2[요일2] || 'hello')
 // default 처리 대신 사용 가능

// cd 폴더명 : 파일위치 이동 (cd 폴더명/폴더명 하면 두단계 이동 가능)
// cd .. : 전 상위 폴더 이동
// mkdir 폴더명 : 폴더 생성
// touch 파일명 파일명 : 파일 생성
// ls : 현재 폴더 파일 목록