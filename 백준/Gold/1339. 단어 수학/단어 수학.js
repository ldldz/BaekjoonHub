const [_, ...words] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const charMap = {};

for (const word of words) {
  const wordLen = word.length;
  word.split("").forEach((char, i) => {
    if (!charMap[char]) {
      charMap[char] = 0;
    }
    charMap[char] += 10 ** (wordLen - i - 1);
  });
}

const sum = Object.values(charMap)
  .sort((a, b) => b - a)
  .reduce((sum, cur, i) => (sum += (9 - i) * cur), 0);

console.log(sum);
