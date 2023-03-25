function partition(arr, left, right) {
  let pivot = arr[right];
  let index = left;
  for (let i = left; i < right; ++i) {
    if (arr[i] <= pivot) {
      let temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
      index++;
    }
  }
  let temp = arr[index];
  arr[index] = arr[right];
  arr[right] = temp;
  return index;
}

function QuickSort(arr, left, right) {
  if (left < right) {
    let pivot = partition(arr, left, right);
    console.log(arr);
    QuickSort(arr, left, pivot - 1);
    QuickSort(arr, pivot + 1, right);
  }
  return arr;
}

export default QuickSort;