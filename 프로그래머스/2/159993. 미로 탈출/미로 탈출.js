function solution(maps) {
    let [s, l] = [null, null];
    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[0].length; j++) {
            if (maps[i][j] === 'S') s = [i, j];
            else if (maps[i][j] === 'L') l = [i, j];
        }
    }
    
    function bfs(start, target, visited) {
        const q = [start];
        visited[start[0]][start[1]] = 0;
        while (q.length) {
            const [i, j] = q.shift();
            for (const [di, dj] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
                const [ni, nj] = [i + di, j + dj];
                if (visited[ni]?.[nj] === false) {
                    q.push([ni, nj]);
                    visited[ni][nj] = visited[i][j] + 1;
                    if (maps[ni][nj] === target) return visited[ni][nj];
                }
            }
        }
        return 0;
    }
    const [a, b] = [bfs(s, 'L', maps.map((m) => [...m].map(c => c === 'X'))), 
                    bfs(l, 'E', maps.map((m) => [...m].map(c => c === 'X')))]
    return a && b ? a + b : -1;
}