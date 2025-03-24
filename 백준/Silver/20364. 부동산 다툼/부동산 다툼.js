const [nq, ...input] = require("fs").readFileSync("./dev/stdin").toString().trim().split("\n");

const [n] = nq.split(" ").map(Number);
const arr = input.map(Number);

const visited = Array(n + 1).fill(false);

console.log(
  arr
    .map((v) => {
      const initial = v;
      const path = [];
      while (v >= 1) {
        path.push(v);
        if (v % 2) {
          v = (v - 1) / 2;
        } else {
          v /= 2;
        }
      }

      path.reverse();
      for (const p of path) {
        if (visited[p]) {
          visited[initial] = true;
          return p;
        }
      }
      visited[initial] = true;
      return 0;
    })
    .join("\n")
);
