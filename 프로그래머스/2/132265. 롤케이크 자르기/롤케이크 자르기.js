 function solution(topping) {
    const c = {};
    const d = {};
    let ans = 0;
    topping.forEach(v => d[v] = (d[v] || 0) + 1);
     
    let cntC = 0;
    let cntD = Object.keys(d).length;
     
     for (let i = 0; i < topping.length; i++) {
         if (c[topping[i]] === undefined) {
             c[topping[i]] = 0;
             cntC++;
         } 
         c[topping[i]]++
         d[topping[i]]--;
         if (d[topping[i]] === 0) {
             delete d[topping[i]];
             cntD--;
         }
         if (cntC === cntD) ans++;
     }
    
    return ans;
}