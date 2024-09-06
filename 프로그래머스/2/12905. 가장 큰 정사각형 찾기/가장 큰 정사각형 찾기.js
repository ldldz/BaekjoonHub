function solution(board) {
    let max = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (i && j && board[i][j]) {
                board[i][j] = Math.min(board[i - 1][j], board[i - 1][j - 1], board[i][j - 1]) + board[i][j];
            }
            max = Math.max(max, board[i][j]);
        }
    }
    return max ** 2;
}