// Given an image represented by an NxN matrix, where each pixel in the image is an integer from 0 - 9,
// write a method to rotate the image by 90 degrees. Can you do this in place?

const arr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
];
console.log(arr[0], arr[1], arr[2]);

const rotateNinety = (image) => {
  for (let i = 0; i < image.length / 2; i++) {
    for (let j = 0; j < image.length - i - 1; j++) {
      let temp = arr[i][j];
      arr[i][j] = arr[image.length - i - 1][image.length - j - 1];
      arr[image.length - i - 1][image.length - j - 1] = arr[image.length - j - 1][i];
      arr[image.length - j - 1][i] = temp;
    }
  }
  return image;
};

console.log(rotateNinety(arr));
