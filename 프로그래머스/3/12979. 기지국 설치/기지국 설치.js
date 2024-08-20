function solution(n, stations, w) {
    const arr = [];
    for (let i = 0; i < stations.length; i++) {
        if (stations[i] - w <= 1) continue;
        arr.push(stations[i] - w - ((stations[i - 1] + w) || 0) - 1);
    }
    if (stations.at(-1) + w < n) arr.push(n - (stations.at(-1) + w));
    return arr.reduce((acc, cur) => acc + Math.ceil(cur / (2 * w + 1)), 0);
}