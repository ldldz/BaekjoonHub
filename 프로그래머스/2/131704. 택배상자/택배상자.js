function solution(order) {
    order = order.reverse();
    const belt = Array.from({ length: order.length }, (_, i) => order.length - i);
    const stack = [];
    let ans = 0;
    while (belt.length || (stack.length && order.at(-1) === stack.at(-1))) {
        if (order.at(-1) === belt.at(-1)) {
            belt.pop();
            order.pop();
            ans++;
        } else if (order.at(-1) === stack.at(-1)) {
            stack.pop();
            order.pop();
            ans++;
        } else {
            stack.push(belt.pop());
        }
    }
    return ans;
}