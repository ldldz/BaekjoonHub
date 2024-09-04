function getNexts(board, x, y) {
    const ds = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const nexts = [];
    
    return ds.map(([dx, dy]) => {
        let i = 0;
        while (board[x + dx * (i + 1)] && board[x + dx * (i + 1)][y + dy * (i + 1)] 
               && board[x + dx * (i + 1)][y + dy * (i + 1)] !== 'D') {
            i++;
        }
        return [x + dx * i, y + dy * i];
    });
}

function solution(board) {
    const visited = Array.from({ length: board.length }, () => new Array(board[0].length).fill(false));
    let [ix, iy] = [null, null];
    
    for (let i = 0; i < board.length && ix === null; i++) {
        for (let j = 0; j < board[0].length && ix === null; j++) {
            if (board[i][j] === 'R') [ix, iy] = [i, j];
        } 
    }
    const q = [[ix, iy, 0]];
    visited[ix][iy] = true;
    
    while(q.length) {
        const [x, y, d] = q.shift();
        const nexts = getNexts(board, x, y);
        
        for (let i = 0; i < 4; i++) {
            const [nx, ny] = nexts[i];
            if (board[nx][ny] === 'G') return d + 1; 
            if (!visited[nx][ny]) {
                q.push([nx, ny, d + 1]);
                visited[nx][ny] = true;
            }
        }
    }
    
    return -1;
}