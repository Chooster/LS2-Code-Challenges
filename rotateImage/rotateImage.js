// Given an image represented by an NxN matrix, where each pixel in the image is an integer from 0 - 9,
// write a method to rotate the image by 90 degrees. Can you do this in place?

const arr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8]
];
console.log(arr[0], arr[1], arr[2]);

const rotateNinety = (image) => {
  const swapRows = () => {
    for (let i = 0, k = 2; i < k; i++, k--) {
      const temp = image[i];
      image[i] = image[k];
      image[k] = temp;
    }
  };
  const transpose = () => {
    for (let i = 0; i < image.length; i++) {
      for (let j = 0; j < image[0].length; j++) {
        let temp = image[i][j];
        image[i][j] = image[image.length - 1 - i][j];
        image[image.length - 1 - i][j] = temp;
      }
    }
  };
  swapRows(image);
  transpose(image);
  return image;
};

console.log(rotateNinety(arr));
