console.log(+require("fs").readFileSync("./dev/stdin").toString().trim().split("").at(-1) % 2 ? "SK" : "CY");
