const [[n], arr] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((l) => l.split(" ").map(Number));
console.log(
  n == 1
    ? 0
    : arr.reduce((a, c, i) => {
        for (let j = c + i; (i < 1 || a[i]) && j > i && !a[j]; j--) a[j] = a[i] + 1;
        return a;
      }, Array(n).fill(0))[n - 1] || -1
);