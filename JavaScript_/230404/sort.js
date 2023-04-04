// https://www.notion.so/paullabworkspace/JavaScript-sort-compare-function-ff38f176e79e4c5d9ade9c4734620ffd
// 배열의 요소를 정렬하는데 사용, 숫자형 정렬은 검사 코드 필요(-> 사전식 정렬로 되어있어서)
const nums = [3, 1, 8, 6]
console.log(nums.sort());   // 제대로 정렬되는 것 같지만

const nums1 = [3, 1, 8, 6, 11]
console.log(nums1.sort());    // 아님

console.log(nums1.sort((a, b) => a - b)); // 오름차순
console.log(nums1.sort((a, b) => b - a)); // 내림차순

// 실무사용코드
function sort(key) {
  if (click) {
    click = false
    var sortedData = jsonData.sort((a, b) => (a[key] < b[key] ? -1 : (a[key] > b[key] ? 1 : 0)))
  }
  else {
    click = true
    var sortedData = jsonData.sort((a, b) => (a[key] > b[key] ? -1 : (a[key] < b[key] ? 1 : 0)))
  }
}

// 작동되는거 확인
const nums2 = [3, 1, 11, 8, 6];
console.log(nums.sort((a, b) => {
  console.log(a, b)
  console.log(a - b)
}));
