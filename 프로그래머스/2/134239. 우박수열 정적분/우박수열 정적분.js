function solution(k, ranges) {
    const w = [k];
    while (w.at(-1) !== 1) w.push(w.at(-1) % 2 ? 3 * w.at(-1) + 1 : w.at(-1) / 2);
    const area = w.map((y, i) => i ? Math.min(w[i - 1], y) + Math.abs(w[i - 1] - y) / 2 : 0);
    return ranges.map(([a, b]) => [a + 1, w.length + b])
        .map(([a, b]) => b < a ? -1 : area.slice(a, b).reduce((c, d) => c + d, 0));
}