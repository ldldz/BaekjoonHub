const input = require("fs").readFileSync("/dev/stdin").toString().trim();
console.log(input.length ? input.split(' ').length : 0);