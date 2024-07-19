function maxHeap(arr, n, i) {
  let largest = i;
  let left = i * 2 + 1;
  let right = i * 2 + 2;
  if(left < n && arr[left] > arr[largest]){
    largest = left;
  }
  if(right < n && arr[right] > arr[largest]){
    largest = right;
  }
  if(largest != i){
    [arr[largest], arr[i]] = [arr[i], arr[largest]];
    maxHeap(arr, n, largest);
  }
}

function HeapSort(arr, n) {
  for(let i = Math.floor(n / 2); i >= 0; --i){
    maxHeap(arr, n, i);
  }
  for(let i = n - 1; i > 0; --i){
    [arr[0], arr[i]] = [arr[i], arr[0]]
    maxHeap(arr, i, 0)
  }
}

export default HeapSort;