const [r, c, k] = require("fs").readFileSync("./dev/stdin").toString().trim().split(" ").map(Number);
console.log(+(k < 2 || !((r * c) % 2)));