function solution(k, d) {
    let ans = 0;
    for (let i = 0; i <= d; i += k) {
        ans += Math.floor(Math.floor(Math.sqrt(d ** 2 - i ** 2)) / k) + 1;
    }
    return ans;
}