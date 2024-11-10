function calc (a, b, op) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
    }
}
function calcExp(exp, op) {
    let newExp = [exp[0]];
    for (let i = 1; i < exp.length; i += 2) {
        if (exp[i] === op) {
            newExp.push(calc(newExp.pop(), exp[i + 1], op))
        } else {
            newExp.push(exp[i], exp[i + 1]);
        }
    }
    return newExp;
}

function getPerm(arr) {
    if (arr.length === 1) return [arr];
    return arr.reduce((acc, cur) => [...acc, ...getPerm(arr.filter(v => v !== cur)).map(v => [cur, ...v])], []);
}

function solution(expression) {
    const exp = [];
    let temp = '';
    for (let i = 0; i < expression.length; i++) {
        if (Number.isInteger(+expression[i])) {
            temp += expression[i];
        } else {
            exp.push(+temp);
            exp.push(expression[i]);
            temp = '';
        }
    }
    exp.push(+temp);
    return Math.max(...getPerm(['+', '-', '*']).map(ops => Math.abs(ops.reduce((acc, op) => calcExp(acc, op), exp))));
}