function solution(a, b) {
    a = a.sort((a, b) => b - a);
    b = b.sort((a, b) => b - a);
    let ans = 0;
    let j = 0;
    for (let i = 0; i < b.length; i++) {
        while (b[i] <= a[j] && j < a.length) j++;
        if (b[i] > a[j]) {
            ans++;
            j++;
        }
        if (j === a.length) break;
    }
    
    return ans;
}