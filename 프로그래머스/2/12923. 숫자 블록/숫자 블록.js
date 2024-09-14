function solution(begin, end) {
    const ans = [];
    for (let i = begin; i <= end; i++) {
        let n = i === 1 ? 0 : 1;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (!(i % j)) {
                if (i / j <= 10_000_000) {
                    n = i / j;
                    break;
                } else {
                    n = Math.max(n, j);
                }
            }
        }
        ans.push(n);
    }
    return ans;
}