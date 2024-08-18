function solution(book_time) {
    book_time = book_time
        .map((bt) => bt.map((s) => {
        const [h, m] = s.split(':').map(Number);
        return h * 60 + m;
    })).sort(([s1, e1], [s2, e2]) => s1 - s2);
    
    const r = [[book_time[0]]];
    for (let i = 1; i < book_time.length; i++) {
        for (let j = 0; j < r.length; j++) {
           if (r[j].at(-1)[1] + 10 <= book_time[i][0]) {
               r[j].push(book_time[i]);
               break;
           } else if (j === r.length - 1) {
               r.push([book_time[i]]);
               break;
           }
        }

    }
    return r.length;
}