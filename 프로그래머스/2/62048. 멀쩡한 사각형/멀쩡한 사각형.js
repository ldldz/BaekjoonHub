function solution(w, h) {
    let ans = 0;
    for (let i = 1; i < h; i++) {
        ans += Math.floor(w / h * i);
    }
    return ans * 2
}