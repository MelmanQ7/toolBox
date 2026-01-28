let y = true;

function flaxFib(n, startA = 0, startB = 1) {
    if (y) {
        n += 2;
    }
    let res = [startA ,startB];

    for (let i = 2; i <= n; i++) {
        res.push(res[i - 1] + res[i - 2]);
    }
    return `${res[n]}\n${res}`;
}

console.log(flaxFib(7, 1, 2));
