function dfs(land, visited, x, y) {
    const q = [[x, y]];
    const ds = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let [cnt, l, r] = [1, y, y];
    visited[x][y] = true;
    for (let k = 0; k < q.length; k++) {
        const [i, j] = q[k];
        for (const [dx, dy] of ds) {
            if (land[i + dx] && land[i + dx][j + dy] === 1 && !visited[i + dx][j + dy]) {
                visited[i + dx][j + dy] = true;
                cnt++;
                l = Math.min(l, j + dy);
                r = Math.max(r, j + dy);
                q.push([i + dx, j + dy]);
            }
        }
    }
    
    return [cnt, l, r];
}

function solution(land) {
    const n = land.length;
    const m = land[0].length;
    const visited = Array.from({ length: n }, () => new Array(m).fill(false));
    const ans = new Array(m).fill(0);
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (land[i][j] === 1 && !visited[i][j]) {
                const [cnt, l, r] = dfs(land, visited, i, j);
                for (let k = l; k <= r; k++) {
                    ans[k] += cnt;
                }
            }
        }
    }
    return Math.max(...ans);
}