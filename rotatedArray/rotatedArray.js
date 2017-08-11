/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(n))
 */

const rotatedArraySearch = (arr, element) => {
  const pivot = binarySearch(arr, 0);
  if (arr[pivot] === element) return pivot;
  if (element > arr[pivot-1] || element < arr[pivot]) return null;
  if (arr[arr.length - 1] >= element) {
    return (binarySearch(arr, element, pivot, arr.length - 1));
  }
  return binarySearch(arr, element, 0, pivot - 1);
};

const binarySearch = (arr, target, min = 0, max = arr.length - 1) => {
  let guess;
  while (max >= min) {
    guess = Math.floor((max + min) / 2);
    if (arr[guess] === target) return guess;
    if (arr[guess] < target) min = guess + 1;
    else max = guess - 1;
  }
  return guess;
};

console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 11));
