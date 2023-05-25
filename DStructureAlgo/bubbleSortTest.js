// 이 문제는 실제로 입사문제로 사용되던 알고리즘 문제입니다.
// 배열이 하나 주어졌을때 [3,3,2,4,5,2,1,0,3];
// 함수를 만듭니다. 가장 먼저 반복되는 원소의 값을 반환합니다.

const arr = [0, 2, 9, 2, 3, 0, 1, 0];
function loop(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] === arr[j]) {
        return arr[j]
      }
    }
  }
}
console.log(loop(arr));
// O(N^2) -> X

function loop2(arr) {
  const useHash = {};
  for (let i = 0; i < arr.length; i++) {
    if (useHash[arr[i]]) {
      return arr[i];
    } else {
      // 해쉬 테이블의 키로 arr의 원소를 차례로 등록
      useHash[arr[i]] = i;
    }
  }
}

let list = [3, 2, 4, 5, 2, 1, 0, 3]
function sort(list) {
  let stack = []
  for (let i = 0; i < list.length - 1; i++) {
    if (!stack.includes(list[i])) {
      stack.push(list[i])
    } else {
      return (list[i])
    }

  }
}

console.log(sort(list))