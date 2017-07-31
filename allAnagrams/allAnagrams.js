/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array.
 */

/**
  * example usage:
  * const anagrams = allAnagrams('abc');
  * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

const allAnagrams = (str) => {
  const arr = [str];
  let tempStr = str.split('');
  if (str.length < 2) return [str];
  while(arr.length < 6) {
    for (let i = 0; i < str.length; i++) {
      for (let j = 1; j < str.length; j++) {
        let temp = tempStr[i];
        tempStr[i] = tempStr[j];
        tempStr[j] = temp;
      }
      if (arr.indexOf(tempStr.join('')) === -1) {
        arr.push(tempStr.join(''));
      }
    }
    if (arr.indexOf(tempStr.join('')) === -1) arr.push(tempStr.join(''));
  }
  return arr;
};
