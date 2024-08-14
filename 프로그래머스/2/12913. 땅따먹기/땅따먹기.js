function solution(land) {
    return Math.max(...land.reduce(
        (acc, cur) => cur.map(
            (n, i) => Math.max(...acc.filter((_, j) => i !== j).map((m) => n + m))
        )
    ));
}