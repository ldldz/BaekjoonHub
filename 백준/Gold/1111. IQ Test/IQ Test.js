const [[n], arr] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((l) => l.split(" ").map(Number));

console.log(
  (() => {
    if (n > 1 && new Set(arr).size === 1) return arr[0];
    if (n < 3) return "A";

    const a = (arr[2] - arr[1]) / (arr[1] - arr[0]);
    const b = arr[1] - arr[0] * a;
    if (!arr.every((v, i) => i === 0 || v === arr[i - 1] * a + b) || !Number.isInteger(a) || !Number.isInteger(b))
      return "B";
    return arr.at(-1) * a + b;
  })()
);
