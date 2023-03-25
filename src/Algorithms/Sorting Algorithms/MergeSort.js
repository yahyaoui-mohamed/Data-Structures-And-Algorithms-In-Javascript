function merge(arr, left, mid, right) {
  let n1 = mid - left + 1, n2 = right - mid;
  let arr1 = Array(n1), arr2 = Array(n2);

  for (let i = 0; i < n1; ++i) {
    arr1[i] = arr[i + left];
  }
  for (let i = 0; i < n2; ++i) {
    arr2[i] = arr[i + mid + 1];
  }

  let i = 0, j = 0, k = left;

  while (i < n1 && j < n2) {
    if (arr1[i] < arr2[j]) {
      arr[k++] = arr1[i++];
    }
    else {
      arr[k++] = arr2[j++]
    }
  }

  while (i < n1) {
    arr[k++] = arr1[i++];

  }

  while (j < n2) {
    arr[k++] = arr2[j++];

  }
}

function MergeSort(arr, left, right) {
  if (left < right) {
    let mid = Math.floor((left + right) / 2);
    MergeSort(arr, left, mid);
    MergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
  return arr;
}

export default MergeSort;