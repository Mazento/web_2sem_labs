let fact = (x) => x > 1 ? x * fact(x - 1) : x;
console.log(fact(5));