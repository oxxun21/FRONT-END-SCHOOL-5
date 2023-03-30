//prototype은 string형이 사용할 수 있는 메소드, 없는건 String.을 붙여서 사용 
let text = 'ABCDEFGHIJK';

console.log(text[2]) // C
console.log(text[-1]) // 마이너스 인덱싱은 허락하지 않는다.
console.log(text.length)

console.log(text.indexOf('A'))  // 0  indexOf("찾을 문자열", "시작 위치"), indexOf는 시작위치를 지정할 수 있음 
console.log(text.search('A'))  // 0  search("찾을 문자열")

console.log(text.replace('ABC', 'OOO'))   // replace(”찾을 문자열”, “변경할 문자열”); 다중 치환 X (제일 먼저 찾은 단어 하나)
// search, replace => 정규표현식 사용 가능
// let txt2 = 'abcdeHelloabcde'
// let regExp2 = /[A-Z]/g;
// console.log(txt2.search(regExp2))

// let txt3 = 'abcdeHelloabcde'
// let regExp3 = /[A-Z]/g;
// console.log(txt2.replace(regExp2, 'h'))
console.log(text.replaceAll('ABC', 'ooo'))  // => 구 브라우저 지원 X

console.log(text.slice(1, 3))  // start값이 음수인 경우, string의 가장 뒤에서 음수의 절대값만큼 내려온 index로 취급
console.log(text.substring(1, 3)) // start값이 음수인 경우, start값은 0으로 취급 / start > end 인 경우, start 값과 end 값을 바꾸어서 처리

console.log(text.toLocaleUpperCase())
console.log(text.toLocaleLowerCase())

console.log(text.includes('LNM'))  // 특정 문자열 포함 확인

text.split(' ') // 구분자에 들어가는 단위대로 잘림

text.split(' ')

// ['aa', 'bb', 'cc', 'dd']
let text1 = 'aa bb cc dd'
console.log(text1.split(' '));

let text2 = 'aa-bb-cc-dd'
console.log(text2.split('-'));

let text3 = 'aa,bb,cc,dd'
console.log(text3.split(','));

let text4 = 'aa,bb-cc-dd' 
console.log(text4.replace(",","-").split("-"));
console.log(text4.split(/[,-]/g));

let test = '              hello';
test.trim() // 앞뒤 공백 제거

let str1 = '99'
console.log(str1.padStart(5, '0')); // 자릿수 맞추기
let str2 = '99'
console.log(str2.padStart(5, '-')); // 자릿수 맞추기