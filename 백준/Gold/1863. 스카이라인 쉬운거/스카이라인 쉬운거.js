const [_, ...arr] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((l) => l.split(" ").map(Number));
const stack = [0];
let ans = 0;

for (const [_, y] of arr) {
  const ly = stack.at(-1);
  if (y > ly) {
    ans += 1;
    stack.push(y);
  } else if (y < ly) {
    while (stack.at(-1) > y) {
      stack.pop();
    }
    if (stack.at(-1) < y) {
      ans += 1;
      stack.push(y);
    }
  }
}

console.log(ans);
