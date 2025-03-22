const input = require("fs")
  .readFileSync(0, 'utf-8')
  .toString()
  .trim();

function solution(str) {
  const counts = str.split("").reduce((acc, cur) => {
    acc[cur] = (acc[cur] ?? 0) + 1;
    return acc;
  }, {});
  const keys = Object.keys(counts).sort();
  let rest = 0;
  let ans = "";

  for (const key of keys) {
    const n = Math.floor(counts[key] / 2);
    counts[key] -= n * 2;
    rest += counts[key];
    if (rest > 1) return "I'm Sorry Hansoo";
    ans += key.repeat(n);
  }

  if (rest) {
    return ans + Object.entries(counts).find((v) => v[1] === 1)[0] + ans.split("").reverse().join("");
  }

  return ans + ans.split("").reverse().join("");
}

console.log(solution(input));
