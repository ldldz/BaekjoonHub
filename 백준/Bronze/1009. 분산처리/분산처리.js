const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

function getPowerUnits(a, b) {
    const unitsArray = [];
    a %= 10;
    let units = a;
    let last = 0;
    do {
        unitsArray.push(units);
        last = unitsArray[unitsArray.length - 1];
        units = parseInt(last * a) % 10;
    } while(units !== a)
    unitsArray.unshift(unitsArray.pop());
    return unitsArray[b % unitsArray.length];
}

const t = parseInt(input[0]);

for(let i = 1; i <= t; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    const result = getPowerUnits(a, b);
    console.log(`${result === 0 ? result + 10 : result}`);
}