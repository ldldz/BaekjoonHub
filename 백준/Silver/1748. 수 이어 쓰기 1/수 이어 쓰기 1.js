const [n] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s+/).map(Number);
const e = n.toString().length;

let length = 0;
for (let i = 1; i < e; i++) {
  length += 9 * 10 ** (i - 1) * i;
}
length += (n - (10 ** (e - 1) - 1)) * e;
console.log(length);