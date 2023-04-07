// 1.1
const value1 = [10, 20, 30, 10, 20, 30, 40, 10];
const average1 = value1.reduce((a, c) => a + c, 0) / value1.length;
console.log(average1);

// 1.2
const average2 = value1.reduce((a, c) => a + c ** 2, 0) / value1.length;
console.log(average2);

// 2
const value2 = '5, 4, 10, 2, 5';
let arr = value2.split(",");
let sum = arr.reduce((a, c) => parseInt(a) + parseInt(c));
console.log(sum/arr.length);

// 3
const value3 = [11, 22, 33, 111, 2];
let stringValue = value3.join("");
let sum1 = 0;
for (const i in stringValue){
  sum1 += parseInt(stringValue[i], 10)
}
console.log(sum1);

// 4.1
// 4.2

// 4.3
let s = 'hello world';
let reverse = Array.from(s).reverse().join("");
console.log(reverse);

// 5
let lotto = [];
for (let i = 0; i < 6; i++){
  let arr = parseInt(Math.random() * 45 + 1);
  if (arr.length === 6){
    break;
  }
  if (lotto.indexOf(arr) === -1){
    lotto.push(arr);
  }
}
lotto.sort((a, b) => a - b);
console.log(lotto);