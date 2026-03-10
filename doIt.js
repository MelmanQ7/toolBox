import { spcSelect, output, allSymbols, numOfLength, myMap, cc, loadProjectInfo } from "./variables.js";
import { outputData } from "./script.js";
import { showError } from "./uiux.js";

export function repeatString(str, num, spc) {
    let res = []; 
    while (res.length < num) {
        res.push(str);
    }

    let out;

    switch (spc) {
        case "whith":
            out = res.join(" ");
            return out;
        case "whithOut":
            out = res.join("");
            return out;
        case "whithComa":
            out = res.join(", ");
            return out;
        default:
            out = JSON.stringify(res, null, 1);
            return out;
    }
    // outputData(out);
}

export function countStr(str) {
    const segmeter = new Intl.Segmenter('uk', { granularity: 'grapheme'});

    let res = [...segmeter.segment(str)].length;

    let spc = str.split(" ").length -1;

    const counts = { ",": 0, ".": 0, "!": 0, "?": 0};

    for (let char of str) {
        if (char in counts) {
            counts[char]++;
        }
    }

    return `
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
    let out;
        for (let i = start; i <= end; i++){
            res.push(i);
        };

    switch (spcSelectValue) {
        case "whith":
            out = res.join(" ");
            break;
        case "whithOut":
            out = res.join("");
            break;
        case "whithComa":
            out = res.join(", ");
            break;
        default:
            console.log(res);
            out = JSON.stringify(res, null, 1);
            break;
    }
    output.style.wordBreak = "break-all"; 
    // output.style.overflowWrap = "break-word";
    // output.style.whiteSpace = "normal";
    return out;
}


export function genPasword(pswrdLength) {
    let current = Date.now();
    let pasword = [];
    let res = [];

    while (res.length < 10) {
        for (let i = 0; i < pswrdLength; i++) {
        let randomNum;

        const m = 2147483648;
        const a = 1103515245;
        const c = 12345;

        current = ( a * current + c) % m;
        randomNum = current / m;
        const min = 0;
        let max = allSymbols.length;
        let range = max - min;
        let randomInt = Math.floor(randomNum * range) + min;
        let index = randomInt;
        
            let arr = allSymbols[index];
            pasword.push(arr);
        }
        res.push(pasword.join(""));
        pasword = [];
    }

    return `${res.join("<br>")}`;
}

export function flaxFib(n, a, b) {
    let res = [a, b];
    let isBig = false;

    for (let i = 2; i <= n; i++) {
        let next = res[i - 1] + res[i - 2];

        if (!isBig && next > 1e300) {
            isBig = true;
            res = myMap(res, num => BigInt(num));
            next = res[i - 1] + res[i - 2];
        }

        res.push(next);
    }

    output.style.wordBreak = "break-all"; 
    output.style.overflowWrap = "break-word";
    output.style.whiteSpace = "normal";

    return `${res[n]}<br>[ ${res.join(", ")} ]`;
}

export async function getRate(user) {
    try {
        const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?&json');

        if (!response.ok) {
            // Замість alert краще викидати помилку, щоб вона потрапила в catch
            throw new Error(`Сервер не доступний: ${response.status}`);
        }

        const data = await response.json();
        
        // Використовуємо метод find для чистоти коду
        const currency = data.find(item => item.cc === user);

        if (currency) {
            return `Ціна ${currency.txt}(${currency.cc}): ${currency.rate} ₴(UAH)`;
        } else {
            showError(`Валюту ${user} не знайдено`, "operation");
            return null; // Повертаємо null, щоб викликаюча функція знала, що результату немає
        }
        
    } catch (error) {
        showError(error, "operation");
        console.error(error);
        return null;
    }
}

export async function comandLine(comm) {
    let info;
    const date = new Date().toLocaleDateString();

    try {
        info = await loadProjectInfo();
    } catch (err) {
        console.error("Щось пішло не так:", err);
    }

    switch (comm) {
        case "help":
            return `
        <b>${info.name.toUpperCase()}</b> - ${info.description}<br>
        ----------------------------<br>
        help - список команд<br>
        version - версія додатку<br>
        author - хто це створив
    `;
        case "version":
            return `Версія: ${info.version} | Дата: ${date} `;
    }
}
