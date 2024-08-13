function solution(numbers) {
    const ans = Array(numbers.length);
    const stack = [];
    for (let i = numbers.length - 1; i >=0; i--) {
        while (numbers[stack.at(-1)] <= numbers[i]) stack.pop();
        ans[i] = stack.length ? numbers[stack.at(-1)] : -1
        stack.push(i);
    }
    return ans;
}