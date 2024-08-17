function solution(storey) {
    const l = storey.toString().length;
    let ans = 0;
    let i = 0;
    while (storey) {
        const n = Math.floor(storey / (10 ** i)) % 10;
        if (n > 5 || n === 5 && i < l - 1 && Math.floor(storey / (10 ** (i + 1)) % 10) >= 5) {
            ans += (10 - n);
            storey += (10 - n) * (10 ** i);
        } else {
            ans += n;
            storey -= n * (10 ** i);
        }
        i++;
    }
    
    return ans;
}