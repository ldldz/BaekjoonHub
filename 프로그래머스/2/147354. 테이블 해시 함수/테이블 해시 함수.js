const solution = (d, c, b, e) => 
    d.sort((a, b) => a[c - 1] - b[c - 1] || b[0] - a[0])
    .slice(b - 1, e)
    .reduce((acc, cur, i) => acc ^ cur.reduce((sum, v) => sum + v % (i + b), 0), 0);