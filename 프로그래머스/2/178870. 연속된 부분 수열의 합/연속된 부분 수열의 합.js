function solution(sequence, k) {
    let [s, e] = [0, sequence.length];
    let [i, j] = [0, 0];
    let sum = sequence[0];
    
    while (j < sequence.length && !(i === j && sequence[i] > k)) {
        if (sum > k) sum -= sequence[i++];
        else {
            if (sum === k && e - s > j - i) [s, e] = [i, j];
            sum += sequence[++j];
        }
    }
    
    return [s, e];
}