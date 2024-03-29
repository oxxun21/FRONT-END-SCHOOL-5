// 문제:
// 배달 음식 주문 시, 주문한 음식들을 최적의 순서로 배치하는 문제입니다.
// 장미반점은 손님에게 어떤 음식을 가장 빠르게 배달할 수 있는지 알려드릴 수 있는 서비스를 고심중입니다.
// 각 음식은 조리 시간과 목적지에 따른 배달 시간을 가지고 있습니다.
// 각 음식은 조리 시간과 배달 시간을 합친 총 시간이 가장 짧은 순서에서 가장 긴 순서까지 오름차순으로 배치되어야 합니다.
// 이를 위해 음식 배치 순서를 결정하는 알고리즘을 구현해보세요.

const foods = [
  { cookingTime: 10, deliveryTime: 15 },
  { cookingTime: 7, deliveryTime: 13 },
  { cookingTime: 3, deliveryTime: 15 },
  { cookingTime: 15, deliveryTime: 5 },
  { cookingTime: 11, deliveryTime: 20 },
  { cookingTime: 13, deliveryTime: 10 }
];

// 버블정렬로 풀어보기
function bubbleSort([...arr]) {

  for (let i = 0; i < arr.length - 1; i++) {
    let isSorted = true;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      const timeOne = arr[j].cookingTime + arr[j].deliveryTime;
      const timeTwo = arr[j + 1].cookingTime + arr[j + 1].deliveryTime;

      if (timeTwo < timeOne) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        isSorted = false;
      }
    }
    if (isSorted) break
  }

  return arr
}

// console.log(bubbleSort(foods));

// 선택정렬로 풀어보기
function selectionSort([...foods]) {
  for (let i = 0; i < foods.length; i++) {
    let minimumIndex = i;

    for (let j = i + 1; j < foods.length; j++) {
      const timeOne = foods[j].cookingTime + foods[j].deliveryTime;
      const timeTwo = foods[minimumIndex].cookingTime + foods[minimumIndex].deliveryTime;

      if (timeOne < timeTwo) {
        minimumIndex = j
      }
    }
    if (minimumIndex !== i) {
      [foods[i], foods[minimumIndex]] = [foods[minimumIndex], foods[i]];
    }
  }

  return foods
}

// console.log(selectionSort(foods));

// 삽입정렬로 풀어보기
function insertionSort([...foods]) {
  for (let i = 1; i < foods.length; i++) {
    for (let j = i; j > 0 && (foods[j].cookingTime + foods[j].deliveryTime) < (foods[j - 1].cookingTime + foods[j - 1].deliveryTime); j--) {
      [foods[j], foods[j - 1]] = [foods[j - 1], foods[j]];
    }
  }
  return foods
}

console.log(insertionSort(foods));