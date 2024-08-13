function move(x, y, cmd) {
    switch (cmd) {
        case 'U':
            return [x + 1, y];
        case 'D':
            return [x - 1, y];
        case 'R':
            return [x, y + 1];
        case 'L':
            return [x, y - 1];
    }
}

function solution(dirs) {
    const visited = {}
    let [x, y] = [5, 5];
    let ans = 0;
    
    for (let i = 0; i < dirs.length; i++) {                
        const [nx, ny] = move(x, y, dirs[i]);
        if (nx < 0 || nx > 10 || ny < 0 || ny > 10) continue;
        if (!visited[`${x}${y}${nx}${ny}`]) {
            visited[`${x}${y}${nx}${ny}`] = true;
            visited[`${nx}${ny}${x}${y}`] = true;
            ans++;
        }
        [x, y] = [nx, ny];
    }
    
    return ans;
}