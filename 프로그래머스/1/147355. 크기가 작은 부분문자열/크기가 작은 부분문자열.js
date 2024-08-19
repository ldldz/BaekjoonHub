function solution(t, p) {
    let ans = 0;
    for (let i = 0; i <= t.length - p.length; i++) {
        if (Number(t.substring(i, i + p.length)) <= Number(p)) ans++;
    }
    return ans;
}