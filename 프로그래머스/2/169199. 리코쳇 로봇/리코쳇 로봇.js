const getNexts = (b, x, y) => [[-1, 0], [1, 0], [0, -1], [0, 1]].map(([dx, dy]) => {
    let i = 0;
    while (b[x + dx * (i + 1)]?.[y + dy * (i + 1)] && b[x + dx * (i + 1)][y + dy * (i + 1)] !== 'D') i++;
    return [x + dx * i, y + dy * i];
});
function solution(b) {
    const visited = Array.from({ length: b.length }, () => new Array(b[0].length).fill(false));
    const r = b.findIndex(n => n.includes('R'));
    const q = [[r, b[r].indexOf('R'), 0]];    
    while(q.length) {
        const [x, y, d] = q.shift();
        for (const [nx, ny] of getNexts(b, x, y)) {
            if (b[nx][ny] === 'G') return d + 1;
            if (!visited[nx][ny]) {
                q.push([nx, ny, d + 1]);
                visited[nx][ny] = true;
            }
        }
    } 
    return -1;
}