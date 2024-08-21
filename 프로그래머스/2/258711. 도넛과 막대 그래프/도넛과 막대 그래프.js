function solution(edges) {
    const graph = {};
    const i = {};
    let [d, s, e] = [0, 0, 0];
    edges.forEach(([a, b]) => {
        if (!graph[a]) graph[a] = [];
        if (!i[b]) i[b] = [];
        graph[a].push(b);
        i[b].push(a);
    });
    const node = Number(Object.keys(graph).find((v) => !i[v] && graph[v].length >= 2));
    graph[node].forEach((n) => {
        const visited = {};
        while (true) {
            if (visited[n]) {
                d++;
                break;
            } else if (!graph[n]) {
                s++;
                break;
            } else if (graph[n].length === 2) {
                e++;
                break;
            } else {
                visited[n] = true;
                n = graph[n][0];
            }
        }
    });
    
    return [node, d, s, e];
}