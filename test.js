function myMax(arr) {
  let len = arr.length;
  let max = -Infinity;
  while (len) {
    if (arr[len] > max) {
      max = arr[len];
    }
    len--;
  }
  return max;
}

console.log(myMax([1, 2, 3, 4, 5, 6, 4347, 8, 900]));
