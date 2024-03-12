const lodash = require("lodash");
const chalk = require("chalk");

function sum(a, b) {
  return a + b;
}

/**
 * Converts a value to wei (the smallest unit of Ether in Ethereum).
 */

function toWei(a) {
  let wei = a * 10 ** 18;
  console.log(chalk.green(wei));
  return wei;
}

/**
 * Pauses execution for a specified duration.
 */
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function uniqueValues(array) {
  lodash.uniq(array);
}

module.exports = {
  sum,
  toWei,
  wait,
  uniqueValues,
};
