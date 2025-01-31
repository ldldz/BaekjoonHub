const [[n, d], arr] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(l => l.split(" ").map(Number));
const graph = Array(n + 1).fill(0);
let ans = 0;

for (const i of arr) {
  graph[i]++;
}

for (let l of graph) {
  while (l > d) {
    ans += Math.floor(l / d);
    l = Math.floor(l / d) + (l % d);
  }
}

console.log(ans);