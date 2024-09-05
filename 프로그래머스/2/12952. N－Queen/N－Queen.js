const solution = (n, q = []) => q.length === n ? 1 
: Array.from({ length: n }, (_, k) => q.every((j, i) => j !== k && Math.abs(i - q.length) !== Math.abs(j - k)) && solution(n, [...q, k]))
    .reduce((a, b) => a + b);