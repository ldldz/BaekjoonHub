const getNexts = (n) => [n - 1, n + 1, n * 2];

const [n, k] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s+/).map(Number);
const visited = Array(100001).fill(false);
let queue = [n];
let sec = 0;
visited[n] = true;

function solution() {
  while (queue.length) {
    const curs = queue;
    const nexts = curs.flatMap((v) => getNexts(v));
    queue = [];
    sec += 1;

    for (next of nexts) {
      if (visited[next] === false) {
        visited[next] = true;
        queue.push(next);
        if (next === k) {
          return;
        }
      }
    }
  }
  return;
}
if (n !== k) {
  solution();
}
console.log(sec);
