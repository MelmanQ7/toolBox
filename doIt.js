import { spcSelect, output, allSymbols, numOfLength, myMap } from "./variables.js";

export function repeatString(str, num) {
    let spcSelectValue = spcSelect.value;
    let res = []; 
    while (res.length < num) {
        res.push(str);
    }

    switch (spcSelectValue) {
        case "whith":
            output.textContent = res.join(" ");
            break;
        case "whithOut":
            output.textContent = res.join("");
            break;
        case "whithComa":
            output.textContent = res.join(", ");
            break;
        default:
            output.textContent = res;
            break;
    }
}

export function countStr(str) {
    let res = str.length;
    let spc = str.split(" ").length -1;

    const counts = { ",": 0, ".": 0, "!": 0, "?": 0};

    for (let char of str) {
        if (char in counts) {
            counts[char]++;
        }
    }

    output.innerHTML = `
    Всього символів: <b>${res}</b><br>
    Пробілів: <b>${spc}</b><br>
    Коми: <b>${counts[","]}</b><br>
    Крапки: <b>${counts["."]}</b><br>
    Знаки оклику: <b>${counts["!"]}</b><br>
    Знаки питання: <b>${counts["?"]}</b>`;
}

export function count(start, end) {
    let spcSelectValue = spcSelect.value;
    let res = []; 
        for (let i = start; i <= end; i++){
            res.push(i);
        };

    switch (spcSelectValue) {
        case "whith":
            output.textContent = res.join(" ");
            break;
        case "whithOut":
            output.textContent = res.join("");
            break;
        case "whithComa":
            output.textContent = res.join(", ");
            break;
        default:
            console.log(res);
            output.textContent = JSON.stringify(res, null, 1);
            break;
    }
}


export function genPasword() {
    let pswrdLength = numOfLength.value;
    let current = Date.now();
    let res = [];
    for (let i = 0; i < pswrdLength; i++) {
    let randomNum;

    const m = 2147483648;
    const a = 1103515245;
    const c = 12345;

    current = ( a * current + c) % m;
    randomNum = current / m;
    const min = 0;
    let max = allSymbols.length;
    let range = max - min + 1;
    let randomInt = Math.floor(randomNum * range) + min;
    let index = randomInt;
    
        let arr = allSymbols[index];
        res.push(arr);
    }
    output.textContent = res.join("");
}

export function flaxFib(n, a = 0, b = 1) {
    let res = [a, b];
    let isBig = false;

    for (let i = 2; i <= n; i++) {
        let next = res[i - 1] + res[i - 2];

        if (!isBig && next > 1e300) {
            isBig = true;
            res = myMap(num => BigInt(num));
            next = res[i - 1] + res[i - 2];
        }

        res.push(next);
    }

    output.style.wordBreak = "break-all"; 
    output.style.overflowWrap = "break-word";
    output.style.whiteSpace = "normal";

    output.innerHTML = `${res[n]}<br>[ ${res.join(", ")} ]`;
}
