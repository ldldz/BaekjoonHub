function solution(want, number, discount) {
    const obj = want.reduce((acc, cur) => ({[cur]: 0, ...acc}), {});
    for (let i = 0; i < 10; i++) obj[discount[i]] >= 0 && obj[discount[i]]++;
    let ans = want.every((v, i) => obj[v] === number[i]) ? 1 : 0;
    
    for (let i = 10; i < discount.length; i++) {
        obj[discount[i - 10]]--;
        obj[discount[i]]++;
        if (want.every((v, i) => obj[v] === number[i])) ans++;
    }
    
    return ans;
}