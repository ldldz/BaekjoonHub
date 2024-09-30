function solution(maps) {
    const visited = maps.map(m => [...m].map(c => c === 'X'));
    const ans = [];
    for (let i = 0; i < maps.length; i++) {
        for (let j = 0; j < maps[0].length; j++) {
            if (!visited[i][j]) {
                visited[i][j] = true;
                ans.push(dfs(i, j));
            }
        }
    }
    function dfs(i, j) {
        let sum = 0;
        for (const [ni, nj] of [[i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1]]) {
            if(visited[ni]?.[nj] === false) {
                visited[ni][nj] = true;
                sum += dfs(ni, nj);
            }
        }
        return sum + +maps[i][j];
    }
    
    return ans.length ? ans.sort((a, b) => a - b) : [-1];
}