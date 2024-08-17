function solution(queue1, queue2) {
    const l = queue1.length;
    let s1 = queue1.reduce((acc, cur) => acc + cur);
    let s2 = queue2.reduce((acc, cur) => acc + cur);
    let [i, j] = [0, l];
    
    if ((s1 + s2) % 2 === 1) return -1;
    
    const q = [...queue1, ...queue2, ...queue1];
    const target = (s1 + s2) / 2;
    
    while (i < l * 2 || j < l * 3) {
        if (s1 < target) {
            s1 += q[j++];
        } else if (s1 > target) {
            s1 -= q[i++];
        } else {
            return i + j - l;
        }
    }
    
    return -1;
}