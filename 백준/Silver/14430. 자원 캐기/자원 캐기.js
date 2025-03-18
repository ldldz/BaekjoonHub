const [[n, m], ...arr] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((l) => l.split(" ").map(Number));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    arr[i][j] += Math.max(arr[i - 1] ? arr[i - 1][j] : 0, arr[i][j - 1] ? arr[i][j - 1] : 0);
  }
}

console.log(arr[n - 1][m - 1]);