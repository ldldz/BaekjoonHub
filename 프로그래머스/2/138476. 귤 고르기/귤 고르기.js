function solution(k, tangerine) {
    const arr = Object.values(tangerine.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {})).sort((a, b) => b - a);
    let i = 0;
    
    while (k > 0) k -= arr[i++]
    
    return i;
}