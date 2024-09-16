const [[_, k], ...arr] = require("fs").readFileSync("./dev/stdin").toString().trim().split('\n').map(l => l.split(' ').map(Number));
const dp = Array(k + 1).fill(0);
for (const [w, v] of arr) {
  const _dp = [...dp];
  for (let i = w; i <= k; i++) {
    dp[i] = Math.max(dp[i], _dp[i - w] + v);
  }
}
console.log(dp.at(-1));