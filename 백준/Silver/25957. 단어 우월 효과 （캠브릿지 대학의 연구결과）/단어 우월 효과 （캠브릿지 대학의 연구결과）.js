const divide = (str) =>
  str.length < 4
    ? [str, ""]
    : [
        str[0] + str.at(-1),
        str
          .slice(1, str.length - 1)
          .split("")
          .sort()
          .join(""),
      ];
const input = require("fs").readFileSync("./dev/stdin").toString().trim().split("\n");
const n = +input[0];
const s = input.at(-1).split(" ");
const origins = {};

for (let i = 1; i <= n; i++) {
  const cur = input[i];
  const [se, c] = divide(cur);
  origins[se + c] = cur;
}
console.log(
  s
    .map((w) => {
      const [se, c] = divide(w);
      return origins[se + c];
    })
    .join(" ")
);