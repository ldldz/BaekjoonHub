function solution(number, select = []) {
    if (select.length === 3) return +(select.reduce((a, b) => a + b) === 0);
    return number.reduce((ans, n, i) => ans + solution(number.slice(i + 1), [...select, number[i]]) , 0);
}