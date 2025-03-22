const input = require("fs").readFileSync("./dev/stdin").toString().trim().split("\n");
const [r, c, k] = input.shift().split(" ").map(Number);
const map = input.map((l) => l.split(""));
const visited = map.map((l) => l.map((v) => (v === "." ? false : true)));
const ds = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
let ans = 0;

const dfs = (x, y, d) => {
  if (d === k || (x === 0 && y === c - 1)) {
    if (d === k && x === 0 && y === c - 1) {
      ans += 1;
    }
    return;
  }

  for (const [dx, dy] of ds) {
    const [nx, ny] = [x + dx, y + dy];
    if (visited[nx] && visited[nx][ny] === false) {
      visited[nx][ny] = true;
      dfs(nx, ny, d + 1);
      visited[nx][ny] = false;
    }
  }
};

visited[r - 1][0] = true;
dfs(r - 1, 0, 1);

console.log(ans);
