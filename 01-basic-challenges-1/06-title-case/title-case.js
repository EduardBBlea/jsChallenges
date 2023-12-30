function titleCase(phrase) {
  const capitalize = (word) => {
    let output = "";
    for (let i = 0; i < word.length; i++) {
      i === 0
        ? (output += word[i].toUpperCase())
        : (output += word[i].toLowerCase());
    }
    return output;
  };
  return phrase
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
}

module.exports = titleCase;
