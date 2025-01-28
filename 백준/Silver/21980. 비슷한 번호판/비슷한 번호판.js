const solution = (bunho) => {
  const map = new Map();
  let result = 0;

  for (const str of bunho) {
    const newStr = [];
    let upperCnt = 0;
    for (let i = 0; i < str.length; i++) {
      const lower = str[i].toLowerCase();
      if (str[i] !== lower) {
        upperCnt++;
      }
      newStr.push(lower);
    }

    const key = `${newStr.sort().join("")}${upperCnt}`;

    if (map.has(key)) {
      const count = map.get(key);
      result += count;
      map.set(key, count + 1);
    } else {
      map.set(key, 1);
    }
  }

  return result;
};

const [[T], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((l) => l.split(" "));

for (let i = 1; i <= T * 2; i += 2) {
  console.log(solution(input[i]));
}
