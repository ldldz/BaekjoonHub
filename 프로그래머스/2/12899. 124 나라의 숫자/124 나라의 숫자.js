function solution(n) {
    let ans = ''
    while (n > 0) {
        ans = ((n % 3) || '4') + ans;
        n = ~~(n / 3) - !(n % 3)
    }
    return ans;
}