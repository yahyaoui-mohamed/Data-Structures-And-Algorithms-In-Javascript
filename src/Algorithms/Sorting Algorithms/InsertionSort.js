function InsertionSort(arr) {
  for (let i = 0; i < arr.length; ++i) {
    let j = i + 1;
    while (j > 0 && arr[j] < arr[j - 1]) {
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
  return arr;
}

export default InsertionSort;