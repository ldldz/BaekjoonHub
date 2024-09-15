

function solution(cards) {
    const visited = Array(cards.length).fill(false);
    const groups = [];
    function group(i) {
        let cnt = 0;
        while (!visited[i]) {
            visited[i] = true;
            i = cards[i] - 1;
            cnt++;
        }
        return cnt;
    }
    while (visited.findIndex(v => !v) >= 0) {
        groups.push(group(cards[visited.findIndex(v => !v)] - 1));
    }
    groups.sort((a, b) => b - a);
    return groups[0] * (groups[1] ?? 0);
    
}