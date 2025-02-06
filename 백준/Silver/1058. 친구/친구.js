const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const arr = [];
const tfs = [];

for (let i = 1; i <= n; i++) {
  arr.push(input[i].split("").map(v => v === 'Y'));
}

for (let i = 0; i < n; i++) {
  let tf = Array(n).fill(0);
  for (let j = 0; j < n; j++) {
    if (arr[i][j]) {
      tf[j] = 1;
      for (let k = 0; k < n; k++) {
        if (arr[j][k]) {
          tf[k] = 1;
        }
      }
    }
   
  }
  tfs.push(tf.reduce((a, b) => a + b) - 1);
}
const ans = Math.max(...tfs);
console.log(ans > 0 ? ans : 0)
