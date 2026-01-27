// let ethas = [];

// let id = ethas.length;

// let num = 10;

// while (ethas.length < 1000000) {
//     ethas.push({ id: ethas.length, date: performance.timeOrigin + performance.now(), });
// }
// console.log(ethas[0].date);
// console.log(ethas[ethas.length - 1].date);
// console.log(ethas);

// console.log(ethas.length);

function flaxFib(n, startA = 0, startB = 1) {
    let res = [startA ,startB];

    for (let i = 2; i <= n; i++) {
        res.push(res[i - 1] + res[i - 2]);
    }
    return `${res[n]}\n${res}`;
}

console.log(flaxFib(7, 1, 2));
