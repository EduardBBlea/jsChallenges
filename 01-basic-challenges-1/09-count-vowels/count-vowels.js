function countVowels(phrase) {
  let vowels = "euioa";
  return phrase
    .toLowerCase()
    .split("")
    .filter((el) => vowels.includes(el)).length;
}

module.exports = countVowels;
