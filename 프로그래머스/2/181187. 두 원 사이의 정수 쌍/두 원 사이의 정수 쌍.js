function solution(r1, r2) {
    let dots = 0;
    for (let i = 1; i <= r2; i++) {
        dots += Math.floor(Math.sqrt(r2 ** 2 - i ** 2)) - (i <= r1 ? Math.ceil(Math.sqrt(r1 ** 2 - i ** 2)) : 0) + 1;
    }
    return dots * 4;
}