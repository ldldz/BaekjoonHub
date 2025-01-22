const [_, ...arr] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((l) => l.split(" ").map(Number));

console.log(
  (() => {
    const [minX, maxX, minY, maxY] = arr.reduce(
      ([minX, maxX, minY, maxY], [x, y]) => [Math.min(minX, x), Math.max(maxX, x), Math.min(minY, y), Math.max(maxY, y)],
      [Infinity, -Infinity, Infinity, -Infinity]
    );
    const l = Math.max(Math.abs(maxX - minX), Math.abs(maxY - minY));
    return arr.every(([x, y]) => x === minX || x === minX + l || y === minY || y === minY + l) ||
      arr.every(([x, y]) => x === maxX || x === maxX - l || y === maxY || y === maxY - l)
      ? l
      : -1;
  })()
);