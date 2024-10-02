function solution(rows, columns, queries) {
    const arr = Array.from({ length: rows }, (_, i) => 
                           Array.from({ length: columns }, (_, j) => columns * i + j + 1))
    function rotate(x1, y1, x2, y2) {
        const temp = arr[x1][y1];
        const m = [temp];
        for (let i = x1 + 1; i <= x2; i++) {
            m.push(arr[i][y1]);
            arr[i - 1][y1] = arr[i][y1];
        }
        for (let i = y1 + 1; i <= y2; i++) {
            m.push(arr[x2][i]);
            arr[x2][i - 1] = arr[x2][i];
        }
        for (let i = x2 - 1; i >= x1; i--) {
            m.push(arr[i][y2]);
            arr[i + 1][y2] = arr[i][y2];
        }
        for (let i = y2 - 1; i > y1; i--) {
            m.push(arr[x1][i]);
            arr[x1][i + 1] = arr[x1][i];
        }
        arr[x1][y1 + 1] = temp;
        return Math.min(...m);
    }
    return queries.map(([x1, y1, x2, y2]) => rotate(x1 - 1, y1 - 1, x2 - 1, y2 - 1));
}