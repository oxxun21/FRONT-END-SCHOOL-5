// DOM
document.write('hello');

// BOM
window.alert() //: 브라우저에 메세지 다이얼로그를 띄웁니다.
window.prompt() //: 브라우저에 사용자의 데이터를 입력받을 수 있는 입력 창을 띄웁니다.
// prompt는 입력값이 숫자여도 문자열로 받습니다.
window.confirm() //: true 혹은 false 값을 반환하는 다이얼로그를 띄웁니다. => 문자열이 아님

console.log() //: 콘솔창에 로그 메세지를 보여줍니다.
console.log("%chello world", "color:red;font-size:32px"); // => %c를 붙이면 그 뒤를 꾸민다.
console.log(
  "%chello world%chello",
  "color:red;font-size:32px",
  "color:blue;font-size:16px"
)
console.error() //: 콘솔창에 에러 메세지를 보여줍니다.

let data = {
  a: 10,
  b: 20,
  c: 30
}
let data2 = [10, 20, 30]
console.table(data)
console.table(data2) //: 콘솔창에 데이터를 테이블 형태로 제공합니다.

console.dir() //: 요소가 가지고 있는 모든 속성들을 보여준다.

console.group() //: 계층 그룹 표현 시 사용한다. => 컴포넌트 구분, 아키텍쳐 파악에 용이
console.groupEnd()  //: 그룹 만든 것을 끝내려면 사용해야한다.

console.group('위니브')
console.group('경영지원')
console.log('대표/이호준')
console.log('COO/OOO')
console.log('CDO/OOO')
console.groupEnd()
console.group('개발')
console.log('개발리드/이OO')
console.log('FE/OOO')
console.log('FE/OOO')
console.log('BE/OOO')
console.log('BE/OOO')
console.log('Infra/OOO')
console.groupEnd()
console.group('디자인')
console.log('DE/OOO')
console.log('DE/OOO')
console.groupEnd()
console.groupEnd()