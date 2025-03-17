const [[n], ...arr] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((l) => l.split(" ").map(Number));
const sum = (n) => ((n - 1) * n) / 2;
const nodes = Array.from({ length: n + 1 }, () => new Array());
let ans = [];

for (let [a, b] of arr) {
  if (b > a) [a, b] = [b, a];
  nodes[a].push(b);
}

const map = nodes.map((v) => v.reduce((a, b) => a + b, 0));
console.log(
  (() => {
    for (let i = n; i > 1; i--) {
      if (map[i] === sum(i)) {
        ans.push("E");
      } else if (map[i] === 0) {
        ans.push("N");
      } else {
        return -1;
      }
    }
    return ans.reverse().join("");
  })()
);
