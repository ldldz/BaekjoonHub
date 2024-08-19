function solution(n, works) {
    const arr = new Array(works.length).fill(0);
    const sum = works.reduce((acc, cur) => acc + cur);
    const max = Math.max(...works);
    let m = Math.max(sum - n, 0);
    
    while (m) {
        for (let j = 0; j < works.length; j++) {
            if (arr[j] < works[j]) {
                arr[j]++;
                m--;
            }
            if (m === 0) break;
        }
    }
    return arr.reduce((acc, cur) => acc += cur ** 2, 0);
}