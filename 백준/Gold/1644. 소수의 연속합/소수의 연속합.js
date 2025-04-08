const n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
const isPrimes = Array(n + 1).fill(true);
isPrimes[0] = false;
isPrimes[1] = false;
for (let i = 2; i < n + 1; i++) {
  if (!isPrimes[i]) continue;
  for (let j = 2; i * j < n + 1; j++) {
    isPrimes[i * j] = false;
  }
}

const primes = [];
for (let i = 2; i < n + 1; i++) {
  if (isPrimes[i]) primes.push(i);
}

let start = 0;
let end = 0;
let sum = 2;
let ans = 0;

while (end < primes.length) {
  if (sum === n) {
    ans++;
    sum += primes[++end];
  } else if (sum < n) sum += primes[++end];
  else if (sum > n) sum -= primes[start++];
}

console.log(ans);
