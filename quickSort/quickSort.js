
/*
 * Implement the quick sort sorting algorithm. Assume the input is an array of integers.
 * https://en.wikipedia.org/wiki/Quicksort
 * https://www.khanacademy.org/computing/computer-science/algorithms#quick-sort
 */
const quickSort = (items, left, right) => {
  var index;
    if (items.length > 1) {
      index = partition(items, left, right);
      if (left < index - 1) {
         quickSort(items, left, index - 1);
      }
      if (index < right) {
         quickSort(items, index, right);
      }
    }
    return items;
};

const swap = (items, first, second) => {
  var temp = items[first];
  items[first] = items[second];
  items[second] = temp;
};

const partition = (items, left, right) => {
  var pivot = items[Math.floor((right + left) / 2)],
     i = left,
     j = right;
  while (i <= j) {
     while (items[i] < pivot) {
         i++;
     }
     while (items[j] > pivot) {
         j--;
     }
     if (i <= j) {
         swap(items, i, j);
         i++;
         j--;
     }
  }
  return i;
};
