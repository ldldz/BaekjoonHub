function solution(m, n, puddles) {
    const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    puddles.forEach(([y, x]) => dp[x][y] = null);
    dp[1][1] = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (i === 1 && j === 1) continue;
            if (dp[i][j] === null) {
                dp[i][j] = 0
            } else {
                dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1_000_000_007
            }
        }
    }
    
    return dp[n][m];
}