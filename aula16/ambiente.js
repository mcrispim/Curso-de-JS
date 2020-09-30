function fatorial1 (n) {
    let fat = 1;
    for (let i = 2; i <= n; i++) {
        fat *= i;
    }
    return fat
}

function fatorial2 (n) {
    if (n === 1) {
        return 1
    } else {
        return n * fatorial2(n - 1);
    }
}

console.log(fatorial1(5));
console.log(fatorial2(5));
