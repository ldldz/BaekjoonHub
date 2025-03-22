let n = +require("fs").readFileSync("./dev/stdin").toString().trim();

console.log(
  (() => {
    if (n <= 9) {
      return 1;
    } else {
      let m = Math.floor(n / 18) * 2;
      n %= 18;
      if (n === 0) {
        return m;
      } else if (n < 10) {
        return m + 1;
      } else if (n % 2 === 1) {
        return m + 3;
      } else {
        return m + 2;
      }
    }
  })()
);
