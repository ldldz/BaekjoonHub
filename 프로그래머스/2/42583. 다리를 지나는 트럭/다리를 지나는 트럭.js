function solution(bridge_length, weight, truck_weights) {
    const b = new Array(bridge_length).fill(0);
    let [w, i, j] = [0, 0, 0];
    
    while (i < b.length) {
        w -= b[i++];
        if (j < truck_weights.length) {
            b.push(w + truck_weights[j] <= weight ? truck_weights[j++] : 0);
            w += b.at(-1);
        }
    }
    return i;
    
}