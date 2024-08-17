function solution(weights) {
    const c = weights.reduce((acc, cur) => (acc[cur] = (acc[cur] || 0) + 1, acc), {});
    
    return Object.keys(c)
        .reduce((ans, n) => ans += (c[n] * (c[n] - 1) / 2) 
                                   + (c[n] * c[n / 2] || 0) 
                                   + (c[n] * c[n / 3 * 2] || 0) 
                                   + (c[n] * c[n / 4 * 3] || 0), 0);    
}