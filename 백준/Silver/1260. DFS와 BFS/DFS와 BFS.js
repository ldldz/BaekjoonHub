const [n, _, v, ...lines] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
const dfsAns = [];
const bfsAns = [];

for (let i = 0; i < lines.length; i += 2) {
  graph[lines[i]].push(lines[i + 1]);
  graph[lines[i + 1]].push(lines[i]);
}

// for (const [v1, v2] of lines) {
//   graph[v1].push(v2);
//   graph[v2].push(v1);
// }
for (const v of graph) {
  v.sort((a, b) => a - b);
}

function dfs(visited, v) {
  dfsAns.push(v);
  visited[v] = true;
  for (next of graph[v]) {
    if (!visited[next]) {
      dfs(visited, next);
    }
  }
}
function bfs(visited, v) {
  const queue = [v];
  visited[v] = true;
  while (queue.length) {
    for (next of graph[queue[0]]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
      }
    }
    bfsAns.push(queue.shift());
  }
}

dfs(new Array(n + 1).fill(false), v);
bfs(new Array(n + 1).fill(false), v);

// console.log(graph);
console.log(dfsAns.join(" ") + "\n" + bfsAns.join(" "));
