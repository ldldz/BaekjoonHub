function f(n, a, b) {
    if (n === 1) return [[a, b]];
    const [m] = [1, 2, 3].filter(v => v !== a && v !== b);
    return [...f(n - 1, a, m), [a, b], ...f(n - 1, m, b)]
}

function solution(n) {
    return f(n, 1, 3);
}