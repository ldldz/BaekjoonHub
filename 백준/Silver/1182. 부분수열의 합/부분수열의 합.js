const [n, s, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);
let count = 0;

for (let i = 1; i < 2 ** n; i++) {
  if (arr.filter((_, j) => i & (1 << j)).reduce((sum, cur) => sum + cur) === s) {
    count++;
  }
}

console.log(count);