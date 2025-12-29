import { spcSelect, output, allSymbols, numOfLength } from "./variables.js";
export function repeatString(str, num) {
    let spcSelectValue = spcSelect.value;
    let result = []; 
    while (result.length < num) {
        result.push(str);
    }

    switch (spcSelectValue) {
        case "whith":
            output.textContent = result.join(" ");
            break;
        case "whithOut":
            output.textContent = result.join("");
            break;
        case "whithComa":
            output.textContent = result.join(", ");
            break;
        default:
            output.textContent = result;
            break;
    }

}

export function countStr(str) {
    let res = str.length;
    let spc = str.split(" ").length -1;
    output.innerHTML = `Всього символів: <b>${res}</b><br>Пробілів: <b>${spc}</b>`;
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
            output.textContent = res;
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
