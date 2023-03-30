// 원시타입 : string, number, bigint, boolean, undefined, symbol, null
let str1 = 'hello';
let str2 = str1;
console.log(str2); // 'hello'

str1 = 'world';
console.log(str2); // str2에 할당된 값은 여전히 'hello' 입니다.

// string
console.log(typeof 'hello')
console.log(typeof "hello")
// number
console.log(typeof 10)
console.log(typeof NaN)
// boolean
console.log(typeof true)
console.log(typeof false)
// undefined => 값 할당이 되지 않은 상태
console.log(typeof undefined)
// null => 타입은 object(설계오류), 값이 비어져있는 것을 "명시"
console.log(typeof null)
// bigint => 자바스크립트에서 취급할 수 있는 최대 숫자를 넘어가면 bigint를 사용해야함 (2^53 - 1보다 큰 정수)
// symbol => 고유한 값을 생성할 때 사용

////////////////////////////////////////////////////////////////////////////

// 객체타입 : object(object, array, 정규표현식), function ...
console.log(typeof function(){})  // function
console.log(typeof [10, 20, 30])   // object
console.log(typeof {a: 10, b: 20, c: 30})   // object
console.log(typeof /regExp/gi)  // object

// 형변환(다른 type -> number)
console.log(+'10')
console.log(Number('10')) // 권하지 않습니다.
console.log(parseInt('10')) // 권합니다.
console.log(parseFloat('10.1')) // 권합니다.
console.log(parseInt(true)) // NaN
console.log(parseInt(false)) // NaN
console.log(Number(true)) // 1
console.log(Number(false)) // 0

// 형변환(다른 type -> string)
let hojun = 10;
console.log(hojun.toString()) // 권합니다.
// 10.toString() 10.까지를 소숫점으로 봅니다.
console.log('' + 10)
console.log(String(10))

// 형변환(다른 type -> boolean)
let hojun2 = 10;
console.log(Boolean(-1))
console.log(Boolean(0))
console.log(Boolean(1000))
console.log(!!1000)
console.log(!!hojun2)