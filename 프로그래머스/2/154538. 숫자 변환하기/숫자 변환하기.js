function solution(x, y, n) {
    const calcs = [ (v) => v - n, (v) => v / 2, (v) => v / 3, ]
    const visited = new Array(y + 1).fill(false);
    let arr = [y];
    let ans = 0;
    
    while(arr.length) {
        if (arr.includes(x)) return ans;
        arr = arr
            .flatMap((v) => calcs.map((calc) => calc(v)))
            .filter((v) => {
                if (Number.isInteger(v) && v > 0 && !visited[v]) {
                    visited[v] = true;
                    return true;
                }})
        ans++;
    }
    
    return -1;
}