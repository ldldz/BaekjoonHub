function solution(N, road, K) {
    const map = Array.from({ length: N }, () => new Array(N).fill(null));
    const d = Array.from({ length: N }, (_, i) => !i ? 0 : Infinity);
    const visited = Array(N).fill(false);
    let q = Array.from({ length: N }, (_, i) => i);
    for (let [a, b, c] of road) {
        if (map[a - 1][b - 1]) c = Math.min(c, map[a - 1][b - 1]);
        map[a - 1][b - 1] = c;
        map[b - 1][a - 1] = c;
    }
    while (q.length) {
        q.sort((a, b) => d[a] - d[b]);
        const s = q.shift();
        visited[s] = true;
        for (let i = 0; i < N; i++) {
            if (!visited[i] && map[s][i] && d[i] > d[s] + map[s][i]) {
                d[i] = d[s] + map[s][i];
            }
        }
    }
    return d.filter(v => v <= K).length;
}