function isCorrect(p) {
    const stack = [];
    for (const c of p) {
        if (c === '(') stack.push(c);
        else if (stack.at(-1) === '(') stack.pop();
        else return false;
    }
    return stack.length === 0;
}

function isBalance(p) {
    let [open, close] = [0, 0];
    for (const c of p) {
        c === '(' ? open++ : close++;
    }
    return open === close;
}

function reverse(p) {
    let s = '';
    for (const c of p) {
        s += c === '(' ? ')' : '(';
    }
    return s;
}

function solution(p) {
    if (!p) return p;
    for (let i = 2; i <= p.length; i++) {
        if (isBalance(p.slice(0, i))) {
            const [u, v] = [p.slice(0, i), p.slice(i)];
            return isCorrect(u) ? u + solution(v) : '(' + solution(v) + ')' + reverse(u.slice(1, u.length - 1));
        }
    }
}