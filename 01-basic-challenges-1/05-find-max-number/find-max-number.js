function findMaxNumber(numbers) {
  let output = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > output) {
      output = numbers[i];
    }
  }
  return output;
}

module.exports = findMaxNumber;
