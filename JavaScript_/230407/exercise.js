// for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
for(let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i); 
  }
}

// for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
for(let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i.toString()); 
  }
}

// for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
for(let i = 10; i > 0; i--) {
  if (i % 2 === 1) {
    console.log(i); 
  }
}

// while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
let a = 0
while (a < 10) {
  if(a % 2 === 0){
    console.log(a)
  }
  a++
}

// while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
let b = 10
while (b > 0) {
  if(b % 2 === 1){
    console.log(b)
  }
  b--
}

// for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.
let add = 0 
for (let i = 0; i < 10; i++) {
  add += i
}
console.log(add)

// 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
let add1 = 0
for (let i = 1; i < 20; i++) {
  if (i % 2 !== 0 && i % 3 !== 0) {
    add1 += i
  }
}
console.log(add1);

// 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
let add2 = 0
for (let i = 1; i < 20; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    add2 += i
  }
}
console.log(add2);

// 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.
for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
    if (i + j === 6) console.log([i, j])
  }
}

// 별찍기
// for (let i = 0; i < 5; i++) {
//   let a = ''
//   for(let j = 0; j <= i; j++) {
//     a += '*'
//   }
//   console.log(a);
// }

// for (let i = 0; i < 10; i++) {
//   let a = ''
//   for(let j = 0; j <= 2 * i; j++) {
//     a += '*'
//   }
//   console.log(a);
// }

// for (let i = 0; i < 9; i++) {
//   let a = ''
//   for (let k = 0; k < 9 - i; k++) {
//     a += ' '
//   }
//   for (let j = 0; j < (2 * i + 1); j++) {
//     a += '*'
//   }
//   console.log(a);
// }

// let output = ''
// for (let i = 0; i < 9; i++) {
//   for (let k = 0; k < 9 - i; k++) {
//     output += ' '
//   }
//   for (let j = 0; j < (2 * i + 1); j++) {
//     output += '*'
//   }
//   output += '\n'
// }
// for (let i = 0; i < 10; i++) {
//   for (let k = 0; k < i; k++) {
//     output += ' '
//   }
//   for (let j = 0; j < (2 * (9 - i) + 1); j++) {
//     output += '*'
//   }
//   output += '\n'
// }
// console.log(output);

// 삼각형 출력하기 - pattern 1
for (let i = 0; i < 5; i++) {
  let a =''
  for (let j = 0; j < i + 1; j++) {
    a += '*'
  }
console.log(a)
}

// 삼각형 출력하기 - pattern 2
for (let i = 0; i < 5; i++) {
  let a =''
  for (let j = 0; j < i; j++) { // 빈칸을 증가
    a += ' '
  }
  for (let k = 5; k > i; k--) { // 별을 거꾸로 감소 시키면 됨
    a += '*'
  }
console.log(a)
}

// 삼각형 출력하기 - pattern 3
for (let i = 5; i > 0; i--) {
  let a = ''
  for (let j = 0; j <= i - 1 ; j++) {
    a += '*'
  }
console.log(a)
}

// 삼각형 출력하기 - pattern 4
for (let i = 0; i < 5; i++) {
  let a = ''
  for (let j = 1; j < 5 - i; j++) {
    a += ' '
  }
  for (let k = 0; k <= i; k++) {
    a += '*'
  }
  console.log(a)
}

// 정삼각형 출력하기
for(let i = 0; i < 5; i++) {
  let a =''
  for (let j = 5; j > i + 1; j--) {
    a += ' '
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    a += '*'
  }
  console.log(a)
}

// 역정삼각형 출력하기
for(let i = 0; i < 5; i++) {
  let a =''
  for (let j = 0; j < i; j++) {
    a += ' '
  }
  for (let k = 10; k > 2 * i + 1; k--) {
    a += '*'
  }
  console.log(a)
}

// 구구단
for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} X ${j} = ${i * j}`);
  }
}