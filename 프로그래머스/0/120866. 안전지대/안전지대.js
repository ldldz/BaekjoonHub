function solution(board) {
    let ans = 0;
    let flag = 0;
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            flag = 0;
            for (let k = -1; k < 2; k++) {
                for (let l = -1; l < 2; l++) {
                    if (board[i + k] && board[i + k][j + l] === 1) {
                        flag = 1;
                        break;
                    }
                    if (k === 1 && l === 1) ans++;
                }
                if (flag === 1) break;
            }
        }
    }
    
    return ans;
}