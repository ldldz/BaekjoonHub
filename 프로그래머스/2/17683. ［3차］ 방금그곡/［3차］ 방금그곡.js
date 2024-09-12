function getMArr(m) {
    const mArr = [];
    for (let i = 0; i < m.length; i++) {
        mArr.push(m[i + 1] === '#' ? m[i++] + m[i] : m[i]);
    }
    return mArr;
}

function getPlaytime(s, e) {
    const [sh, sm, eh, em] = [...s.split(':'), ...e.split(':')].map(Number);
    return eh * 60 + em - (sh * 60 + sm);
}

function getPlaytimeMel(t, m) {
    return Array(Math.ceil(t / m.length)).fill(m).flat().slice(0, t);
}

function includes(a, b) {
    return a.find((n, i) => i <= a.length - b.length 
           && n === b[0] 
           && a.slice(i, i + b.length).every((m, i) => m === b[i]));
}

function solution(m, musicinfos) {
    return musicinfos.reduce((acc, musicinfo) => {
        const [s, e, name, mel] = musicinfo.split(',');
        const playtime = getPlaytime(s, e);
        const playtimeMel = getPlaytimeMel(playtime, getMArr(mel));
        return includes(playtimeMel, getMArr(m)) && playtime > acc[1] ? [name, playtime] : acc;
    }, [null, null])[0] ?? '(None)'
}