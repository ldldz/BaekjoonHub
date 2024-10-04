const zip = (s, u) => {
    let result = '';
    for (let i = 0; i < s.length; i += u) {
        const cur = s.slice(i, i + u);
        let n = 1;
        while (s.slice(n * u + i, n * u + i + u) === cur) n++;
        if (n > 1) {
            result += n;
            i = n * u + i - u;
        }
        result += cur;
    }
    return result;
}

function solution(s) {
    return Math.min(...Array.from({ length: s.length / 2 + 1 }, (_, i) => zip(s, i + 1).length));
}