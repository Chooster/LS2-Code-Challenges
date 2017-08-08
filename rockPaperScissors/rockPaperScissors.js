/*
 * * Write a function that generates every sequence of throws a single
 * * player could throw over a three-round game of rock-paper-scissors.
 * *
 * * Your output should look something like:
 * *   [["rock", "rock", "rock"],
 * *    ["rock", "rock", "paper"],
 * *    ["rock", "rock", "scissor"],
 * *    ["rock", "paper", "rock"],
 *              ...etc...
 *                   */

const rockPaperScissors = () => {
	const arr = [];
  const temp = ['rock', 'paper', 'scissors'];
  for (let i = 0; i < temp.length; i++) {
		for (let j = 0; j < temp.length; j++) {
			for (let k = 0; k < temp.length; k++) {
				arr.push([temp[i], temp[j], temp[k]]);
			}
		}
	}
	return arr;
};
