function solution(n) {
    let [a, b, i] = [1, 2, 2];
    while (i < n) {
        [a, b] = [b, (a + b) % 1_000_000_007];
        i++;
    }
    return b;
}