const bs = (arr, target) => {
  let [s, e] = [0, arr.length - 1];
  let result = -1;
  while (s <= e) {
    const m = Math.floor((s + e) / 2);
    if (arr[m] > target) {
      e = m - 1;
      result = m;
    } else {
      s = m + 1;
    }
  }
  return result;
};

const [[n, m], t, ...arr] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((l) => l.split(" ").map(Number));
const T = arr.flat();
const sum = [];

for (const ti of t) sum.push((sum.at(-1) ?? 0) + ti);

console.log(T.map((v) => (v >= sum.at(-1) ? n : bs(sum, v))).join("\n"));