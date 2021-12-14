function insertionSort (arr) {
    let value, j
    for (let i = 1; i < arr.length; i++) {
         value = arr[i]
         j = i - 1 // position to insert sorted value in array
        while (j >= 0 && arr[j] > value) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = value;
    }
    return arr;
  }
  console.log ( insertionSort([20, 10, 5, 30, 1, 25]) )