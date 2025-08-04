function insertionSort(arr) {
    // Loop through array starting from second element
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];      // Element to be inserted
        let j = i - 1;

        // Move elements of arr[0..i-1], that are greater than key,
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert key at the correct position
        arr[j + 1] = key;
    }

    return arr;  // Return sorted array
}

let arr = [5, 6, 77, 88, 99, 2, 1];
console.log(insertionSort(arr));
