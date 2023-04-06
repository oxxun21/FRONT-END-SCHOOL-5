let x = 0
while (x < 10) {
  console.log(x)
  x += 1
}

let x1 = 0
while (x1 < 10) {
    console.log('start')
    console.log(x1)
    x1 += 1
    console.log('end')
}

// let input;
// do {
//     input = prompt("숫자를 입력하세요.");
// } while (isNaN(input));

// console.log("입력한 숫자는 " + input + "입니다.");

/// 1
for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
}

let i = 2 
while (i < 10) {
  let j = 1   // 초기화
  while (j < 10) {
    console.log(`${i} X ${j} = ${i * j}`);
    j++
  }
  i++
}

/// 2
let a = 'hello world';
a.split("").reverse().join("");

let a1 = 'hello world';
let result = ''
for (let i = 0; i < a1.length; i++) {
  result = a1[i] + result
}

console.log(result);

let a2 = 'hello world';
let result1 = ''
let count = 0
while (count < a2.length) {
  result = a2[count] + result
  count++
}

console.log(result);

// 콘솔에 '<- 값' 은 반환 값!

/// 3
let a3 = 1;
for (let i = 1; i < 6; i++) {
  a3 *= i
}
console.log(a3);

let a4 = 2
count = 1;
while (count < 6) {
  a4 *= count
  count += 1
}
console.log(a4);