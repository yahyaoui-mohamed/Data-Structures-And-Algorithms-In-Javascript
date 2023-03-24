function merge(arr, low, high, mid) {

}

function MergeSort(arr, low, high) {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    MergeSort(arr, low, mid);
    MergeSort(arr, mid + 1, high);
    merge(arr, low, mid, high);
  }
  return arr;
}

export default MergeSort;