const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
const n = input[0];
const k = input[1];
let bottles = n;
let binBottles = bottles.toString(2);
function countOnes(bin) {
    bin = bin.split('').map(Number);
    return bin.reduce((count, currentValue) => count += currentValue === 1, 0);
}
while (countOnes(binBottles) > k) {
    bottles += parseInt(binBottles.substring(binBottles.lastIndexOf('1')), 2);
    binBottles = bottles.toString(2);
}
console.log(bottles - n);