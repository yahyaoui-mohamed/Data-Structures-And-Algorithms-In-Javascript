function partition(arr, start, end) {
  let pivot = arr[end];
  let index = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      let temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
      index++;
    }
  } 
  let temp = arr[index];
  arr[index] = arr[end];
  arr[end] = temp;
  return index;
}

function QuickSort(arr, low, high) {
  if (low < high) {
    let pivot = partition(arr, low, high);
    console.log(arr);
    QuickSort(arr, low, pivot - 1);
    QuickSort(arr, pivot + 1, high);
  }
  return arr;
}

export default QuickSort;