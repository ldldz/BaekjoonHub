function isMap(user, banned) {
    return user.length === banned.length && [...user].every((v, i) => banned[i] === '*' || v === banned[i]);
}

function solution(user_id, banned_id) {
    const obj = {};
    const ans = [];
    function getCases(arr) {
        if (arr.length === banned_id.length) {
            arr.sort();
            if (ans.every(a => !a.every((v, i) => v === arr[i]))) {
                ans.push(arr);
            }
            return;
        };
        const len = arr.length;
        for (let i = 0; i < obj[banned_id[len]].length; i++) {
            const id = obj[banned_id[len]][i];
            if (!arr.includes(id)) {
                getCases([...arr, id], banned_id, obj);
            }
        }
    }
    banned_id.forEach(banned => obj[banned] = user_id.filter(user => isMap(user, banned)) );
    getCases([]);
    return ans.length;
}