const getW = k => k === 1 ? [1] : [k, ...getW(k % 2 ? 3 * k + 1 : k / 2)];
const getArea = w => w.slice(1).map((y, i) => (w[i] + y) / 2);
const getSum = (area, a, b) => b < a ? -1 : area.slice(a, b).reduce((c, d) => c + d, 0);
const solution = (k, ranges) => {
    const w = getW(k);
    const area = getArea(w);
    return ranges.map(([a, b]) => getSum(area, a, w.length + b - 1));
};
