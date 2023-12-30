function countOccurrences(word, letter) {
  let output = 0;
  for (let i = 0; i < word.length; i++) {
    word[i] === letter && output++;
  }
  return output;
}

module.exports = countOccurrences;
