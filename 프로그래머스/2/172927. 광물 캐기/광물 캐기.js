function solution(picks, minerals) {
    picks.reverse()
    minerals = minerals.map(m => ({'diamond': 25, 'iron': 5, 'stone': 1})[m]);
    
    function recur(p, k, piro) {
        if (Math.max(...p) === 0) return piro;
        let result = Infinity;
        for (let i = 0; i < 3; i++) {
            if (p[i] > 0) {
                let increase = 0
                for (let j = k; j < k + 5 && j < minerals.length; j++) {
                    increase += Math.ceil(minerals[j] / (5 ** i));
                }
                p[i]--;
                result = Math.min(result, recur(p, k + 5, piro + increase));
                p[i]++;
            }
        }
        return result;
    }
    return recur(picks, 0, 0);
}