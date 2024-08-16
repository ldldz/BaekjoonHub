function solution(m, n, board) {
    board = board.map((v) => v.split(''))
    const del = () => {
        const arr = [];
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                const c = board[i][j];
                if (c !== null 
                    && board[i][j + 1] === c && board[i + 1][j] === c && board[i + 1][j + 1] === c) {
                    arr.push([i, j]);
                    arr.push([i, j + 1]);
                    arr.push([i + 1, j]);
                    arr.push([i + 1, j + 1]);
                }
            }
        }
        return arr.filter(([i, j]) => {
            if (board[i][j]) {
                board[i][j] = null;
                return true;
            }
        }).length;        
    };
    const drop = () => {
        for (let j = 0; j < n; j++) {
            const line = [];
            for (let i = 0; i < m; i++) {
                if (board[i][j]) {
                    line.push(board[i][j]);
                    board[i][j] = null;
                }
            }
            for (let i = 1; i <= line.length; i++) {
                board[m - i][j] = line.at(-i);
            }
        }
    };
    let ans = 0;
    
    while (true) {
        const d = del();
        drop();
        if (d === 0) break;
        ans += d;
    }

    return ans;
}