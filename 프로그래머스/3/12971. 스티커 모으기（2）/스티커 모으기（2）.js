function f(arr) {
    const dp = new Array(arr.length);  
    for (let i = 0; i < arr.length; i++) {
        dp[i] = Math.max(dp[i - 1] ?? 0, (dp[i - 2] ?? 0) + arr[i]);
    }
    return dp.at(-1);
}

function solution(sticker) {
    if (sticker.length === 1) return sticker[0];
    return Math.max(f(sticker.slice(0, -1)), f(sticker.slice(1)));
}