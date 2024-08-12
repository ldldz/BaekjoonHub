function solution(msg) {
    const dict = Object.fromEntries(
        Array.from({ length: 26 }, (_, i) => [String.fromCharCode(65 + i), i + 1])
    );
    const ans = [];
    let index = 26;
    
    for (let i = 0; i < msg.length; i++) {
        for (let j = i + 1; j <= msg.length; j++) {
            if(!dict[msg.slice(i, j)]) {
                ans.push(dict[msg.slice(i, j - 1)]);
                dict[msg.slice(i, j)] = ++index;
                i = j - 2;
                break;
            } else if (j === msg.length) {
                ans.push(dict[msg.slice(i, j)]);
                i = j;
            }
        }
    }
    
    return ans;
}