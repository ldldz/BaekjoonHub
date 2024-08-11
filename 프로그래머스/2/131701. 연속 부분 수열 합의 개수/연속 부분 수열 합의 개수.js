function sum(arr) {
    return arr.reduce((acc, cur) => acc + cur, 0);
}

function solution(elements) {
    const n = elements.length;
    const arr = [sum(elements)];
    elements.push(...elements);
    
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < n; j++) {
            arr.push(sum(elements.slice(j, j + i)))
        }
    }
    
    return [... new Set(arr)].length;
}