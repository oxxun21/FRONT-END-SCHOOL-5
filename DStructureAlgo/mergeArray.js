function mergeArray(arr1, arr2){
  let merged = [...arr1, ...arr2];
  merged.sort((a, b) => a - b);
  let mergedArray = new Set(merged);
  return mergedArray;
}
// 문제 이해를 잘못했네 ㅋㅋㅋㅋㅋㅋㅋㅋ

function mergeSortedArrays(arr1, arr2){
  if(arr1.length === 0){
    return '병합할 배열이 없다'
  }
  if(arr2.length === 0){
    return '병합할 배열이 없다'
  }
  const mergedArray = [];
  let arr1FirstEl = arr1[0];
  let arr2FirstEl = arr2[0];
  let i = 1;
  let j = 1;

  // arr1FirstEl과 arr2FirstEl 두 값이 모두 falsy 를 반환할 때까지 반복
  while(arr1FirstEl !== undefined || arr2FirstEl !== undefined){  // !== undefined : 두 요소가 0일 때 작동이 되지 않는 경우
    if(arr2FirstEl === undefined || arr1FirstEl < arr2FirstEl) {
      mergedArray.push(arr1FirstEl);
      arr1FirstEl = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2FirstEl);
      arr1FirstEl = arr2[j];
      j++;
    }
  }
  return mergeArray;
}