const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const resistanceTable = ['black', 'brown', 'red', 'orange', 'yellow', 
'green', 'blue', 'violet', 'grey', 'white'];

const result = (10 * resistanceTable.indexOf(input[0]) + resistanceTable.indexOf(input[1]))
* (10 ** resistanceTable.indexOf(input[2]));

console.log(result);