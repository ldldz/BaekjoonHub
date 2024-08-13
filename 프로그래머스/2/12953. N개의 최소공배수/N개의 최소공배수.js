function solution(arr) {
    let i = 1;
    while (!arr.every(v => (arr.at(-1) * i) % v === 0)) i++;
    return arr.at(-1) * i;
}