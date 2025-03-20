const [[n], arr] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((l) => l.split(" ").map(Number));
let ans = 0;

for (let i = 0; i < n; i++) {
  let view = 0;
  let leftMax = -Infinity;
  let rightMax = -Infinity;

  for (let j = i - 1; j >= 0; j--) {
    const leftSlope = (arr[j] - arr[i]) / (i - j);

    if (leftSlope > leftMax) {
      leftMax = leftSlope;
      view += 1;
    }
  }
  for (let j = i + 1; j < n; j++) {
    const rightSlope = (arr[j] - arr[i]) / (j - i);
    if (rightSlope > rightMax) {
      rightMax = rightSlope;
      view += 1;
    }
  }
  ans = Math.max(ans, view);
}
console.log(ans);
