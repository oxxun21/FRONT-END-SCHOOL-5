let x = 5;
let y = 10;

console.log(x > y);   // false

let a = true;
let b = false;

console.log(a && b);  // false

let a2 = 'true';
let b2 = '';

console.log(a2 && b2);  // undefined => true, false가 아닌 값은 단락회로평가

console.log(Boolean('hello')) // t
console.log(Boolean('')) // f
console.log(Boolean([1, 2, 3])) // t
console.log(Boolean([])) // 말도 안되게 t
console.log(Boolean({'one': 10, 'two': 20})) // t
console.log(Boolean({})) // t
console.log(Boolean(0)) // f
console.log(Boolean(-1)) // t
console.log(Boolean(undefined)) // f
console.log(Boolean(null)) // f
console.log(Boolean(NaN)) // f

if (undefined){
    console.log('hello')
}

let aa;
if (aa){
    console.log('hello')
}

// 견고한 코드 : 어떤 상황에서도 기능이 무너지지 않는 코드
let aaa;
if (aaa > 100){
    console.log('hello')
}