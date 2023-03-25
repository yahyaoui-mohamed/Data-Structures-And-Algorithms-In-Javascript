function maxHeap(arr, n, i) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  let largest = i;
  if (arr[left] > arr[largest] && left < n) {
    largest = left;
  }

  if (arr[right] > arr[largest] && right < n) {
    largest = right;
  }

  if (largest != i) {
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    maxHeap(arr, n, largest);
  }
}

function HeapSort(arr, n) {
  for (let i = Math.floor(n / 2) - 1; i >= 0; --i) {
    maxHeap(arr, n, i);
  }

  for (let i = n - 1; i > 0; --i) {
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    maxHeap(arr, i, 0);
  }
  return arr;
}

export default HeapSort;