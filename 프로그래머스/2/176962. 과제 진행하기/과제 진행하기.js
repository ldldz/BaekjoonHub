function solution(plans) {
    const ans = [];
    const stack = [];
    plans = plans.map(([n, s, p]) => {
        const [h, m] = s.split(':').map(Number);
        return [n, h * 60 + m, +p];
    }).sort((a, b) => a[1] - b[1]);
    let time = plans[0][1];
    
    while (plans.length || stack.length) {
        if (plans.length === 1) {
            ans.push(plans.shift()[0]);
            if (stack.length) {
                plans.push(stack.pop());
                continue;
            } else {
                break;
            }
        }
        
        const [n1, s1, p1] = plans[0];
        const [n2, s2, p2] = plans[1];
        if (s1 + p1 <= s2) {
            time += p1;
            ans.push(plans.shift()[0]);
            if (s1 + p1 < s2) {
                if (stack.length) {
                    plans.unshift(stack.pop());
                    plans[0][1] = time;
                } else {
                    time = s1;
                }
            }
        } else {
            plans[0][2] -= s2 - s1;
            time = s2;
            const [n, s, p] = plans.shift();
            stack.push([n, time, p]);
        }
    }
    
    return ans;
}