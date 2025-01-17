let [[n], input] = require("fs").readFileSync("./dev/stdin").toString().trim().split("\n").map(v => v.split(' ').map(Number));
const arr = input.reduce((acc, cur) => {
    acc[cur]++;
    return acc;
}, [0, 0, 0, 0]);
let ans = 0;

for (let i = 3; i > 0; i--) {
    for (const j of [0, 1 + (i == 1)]) {
        const k = Math.min(arr[j], arr[j ^ i]);
        arr[j] -= k;
        arr[j ^ i] -= k
        ans += k * i;
    }
}

console.log(ans);