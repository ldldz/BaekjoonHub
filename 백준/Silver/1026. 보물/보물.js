const [[n], a, b] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split('\n')
  .map(l => l.split(' ').map(Number).sort((a, b) => a - b));
console.log(a.reduce((acc, cur, i) => acc + cur * b[n - i - 1], 0));