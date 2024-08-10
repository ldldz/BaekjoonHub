function solution(n,a,b)
{   const m = Math.log2(n);
    let start = 0;
    let end = n;
 
    if (a > b) [a, b] = [b, a];
 
    for (let i = m; i > 0; i--) {
        const mid = start + (end - start) / 2;
        if (a <= mid && b > mid) {
            return i;
        } else if (a <= mid && b <= mid) {
            end = mid;
        } else if (a > mid && b > mid) {
            start = mid;
        }
    }
}