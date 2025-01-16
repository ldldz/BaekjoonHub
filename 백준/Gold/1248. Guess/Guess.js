const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const [n] = input[0].split(" ").map(Number);
const signs = [];
const answers = [];
let temp = 0;
for (let i = n; i > 0; i--) {
  signs.push(input[1].slice(temp, temp + i).split(""));
  temp += i;
}

function isSignMatch(num, sign) {
  return (num === 0 && sign === "0") || (num > 0 && sign === "+") || (num < 0 && sign === "-");
}

function recursion(signs, seq) {
  const l = seq.length;
  if (l === n) {
    answers.push(seq);
    return;
  }
  if (signs[l][0] === "0") {
    recursion(signs, [...seq, 0]);
    return;
  }

  const signNum = signs[l][0] === "+" ? 1 : -1;

  for (let i = 1; i <= 10; i++) {
    if (answers.length) return;
    const signedI = signNum * i;
    let count = 0;
    for (let j = 0; j < l; j++) {
      const sum = seq.slice(j).reduce((sum, cur) => sum + cur, 0) + signedI;
      if (isSignMatch(sum, signs[j][l - j])) {
        count += 1;
      }
    }
    if (count === l) {
      recursion(signs, [...seq, signedI]);
    }
  }
}

recursion(signs, []);
console.log(answers[0].join(" "));
