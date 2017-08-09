/*
 * Sort an array of numbers using selection sort.
 * https://en.wikipedia.org/wiki/Selection_sort
 * https://www.khanacademy.org/computing/computer-science/algorithms/sorting-algorithms/a/sorting
 *
 * [1, 6, 2, 5, 3, 4] -> [1, 2, 3, 4, 5, 6]
 */

const selectionSort = (arr) => {
  let smallest = [arr[0], 0];
  let index = 0;
  let temp;
  while (index < arr.length) {
    for (let i = index; i < arr.length; i++) {
      if (arr[i] < smallest[0]) smallest = [arr[i], i];
    }
    if (smallest[0] !== arr[index]) {
      temp = arr[index];
      arr[index] = smallest[0];
      arr[smallest[1]] = temp;
    }
    smallest[0] = arr[++index];
  }
  return arr;
};
