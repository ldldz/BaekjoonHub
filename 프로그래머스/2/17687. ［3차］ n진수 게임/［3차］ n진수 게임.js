function solution(n, t, m, p) {
    let str = '';
    let ans = '';
    let i = 0;
    
    while (str.length < m * t) str += (i++).toString(n);
    
    for (let j = 0; j < t; j++) {
        ans += str[m * j + p - 1];
    }
    
    return ans.toUpperCase();
}