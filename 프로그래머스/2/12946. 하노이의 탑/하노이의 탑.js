const f = (n, a, b, c) => n === 1 ? [[a, c]] : [...f(n - 1, a, c, b), [a, c], ...f(n - 1, b, a, c)];

function solution(n) {
    return f(n, 1, 2, 3);
}