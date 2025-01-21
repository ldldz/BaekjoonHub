const [ns, ...arr] = require("fs").readFileSync("./dev/stdin").toString().split("\n");
const [n, s] = ns.split(" ").map(Number);
const [m, ...t] = arr.map(Number);

const solution = () => {
  let soboru = n - s;
  for (let i = 0; i < n - s; i++) {
    for (let j = 0; j < m; j++) {
      if (!(i % t[j]) && !--soboru) return j + 1;
    }
  }
};

console.log(solution());