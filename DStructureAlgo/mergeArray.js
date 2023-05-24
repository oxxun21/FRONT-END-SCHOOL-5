function mergeArray(arr1, arr2){
  let merged = [...arr1, ...arr2];
  let mergedArray = new Set(merged);
  return mergedArray;
}