const comb = (arr, n, cur = []) => {
    if (cur.length === n) return [cur];
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(...comb(arr.slice(i + 1), n, [...cur, arr[i]]));
    }
    return result;
}

function solution(relation) {
    const col = relation[0].length;
    const ck = [];
    
    for (let i = 1; i <= col; i++) {
        const com = comb(Array.from({ length: col }, (_, i) => i), i)
            .filter(c => ck.every(k => !k.every(v => c.includes(v))));
        for (const c of com) {
            const size = new Set(relation.map(rel => rel.filter((_, i) => c.includes(i)).join(''))).size;
            if (size === relation.length) ck.push(c);
        }
    }
    return ck.length;
}