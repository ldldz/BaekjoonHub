function solution(queue1, queue2) {
    const l = queue1.length;
    let sum1 = queue1.reduce((acc, cur) => acc + cur);
    let sum2 = queue2.reduce((acc, cur) => acc + cur);
    let [i, j] = [0, 0];
        
    while (i < l * 2 || j < l * 2) {
        if (sum1 > sum2) {
            sum1 -= queue1[i];
            queue2.push(queue1[i]);
            sum2 += queue1[i++];
        } else if (sum2 > sum1) {
            sum1 += queue2[j];
            queue1.push(queue2[j]);
            sum2 -= queue2[j++];
        } else {
            break;
        }
    }
    
    return i + j < l * 4 ? i + j : -1;
}