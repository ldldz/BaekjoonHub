function isNumber(c) {
    return '0123456789'.includes(c);
}

function solution(files) {
    const newFiles = files.map((file) => file.split('').reduce((acc, cur, i) => {
        if (acc.target === 'head' && isNumber(cur)) {
            acc.target = 'number';
        } else if (acc.target === 'number' && !isNumber(cur)) {
            acc.target = 'tail';
        }
        acc[acc.target] += cur;
        if (i === file.length) delete acc.target
        
        return acc;
    }, { head: '', number: '', tail: '', target: 'head' }));
    
    return newFiles.sort((a, b) => {
        if (a.head.toLowerCase().localeCompare(b.head.toLowerCase()) === 0) {
            if (a.number === b.number) {
                return 0;
            }
            return Number(a.number) - Number(b.number);
        }
        return a.head.toLowerCase().localeCompare(b.head.toLowerCase());
    }).map(({ head, number, tail }) => head + number + tail);
}