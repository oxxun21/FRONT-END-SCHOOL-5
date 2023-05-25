let a = [1] // 비교 : 0
let b = [2, 3] // 비교 : 1
let c = [3, 2, 1] // [2,3,1] ==> [2,1,3] 비교 : 2
let d = [4, 3, 2, 1]// [3,4,2,1] ==> [3,2,4,1] ==> [3,2,1,4] 비교 : 3
// 정렬이 처리되는 과정이 마치 거품이 올라오는 모습과 같다고 하여 버블 정렬이라고 한다.

let myArr = [10, 9, 8, 5, 6, 1, 3, 4, 2, 1];

function bubbleSort(arr){
  for(let i = 0; i < arr.length - 1; i++){
    // 원소 위치 변경
    if(arr[i] > arr[i + 1]){
      // let temp = arr[i];
      // arr[i] = arr[i + 1];
      // arr[i + 1] = temp;

      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
    }
  }
  return arr
}

let result = bubbleSort(myArr);

function bubbleSortAdvanced(arr){
  for(let i = 0; i < arr.length - 1; i++){
    for(let j = 0; j < arr.length - 1; j++){
      if(arr[j] > arr[j + 1]){
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}

let result2 = bubbleSortAdvanced(myArr);