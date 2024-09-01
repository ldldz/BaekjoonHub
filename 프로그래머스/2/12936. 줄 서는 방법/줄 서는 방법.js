function facto(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result
}

function solution(n, k) {
    const ans = [];
    let arr = Array.from({ length: n }, (_, i) => i + 1);
    
    for (let i = n - 1; i >= 0; i--) {
        const f = facto(i);
        const j = Math.ceil(k / f) || arr.length;
        ans.push(arr[j - 1]);
        k %= f;
        arr = arr.filter((v) => v !== arr[j - 1]);
    }
    
    return ans;
}