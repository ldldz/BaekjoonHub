const [[n], arr] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((l) => l.split(" ").map(Number));
let ans = 0;

arr.sort((a, b) => a - b);

for (let i = 0; i < n; i++) {
  const tmp = [...arr];
  tmp.splice(i, 1);
  let start = 0;
  let end = n - 2;

  while (start < end) {
    const sum = tmp[start] + tmp[end];
    if (sum < arr[i]) {
      start += 1;
    } else if (sum > arr[i]) {
      end -= 1;
    } else {
      ans += 1;
      break;
    }
  }
}

console.log(ans);
