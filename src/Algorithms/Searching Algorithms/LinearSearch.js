function LinearSearch(arr, target) {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === target) return i;
  }
  return -1;
}

export default LinearSearch;