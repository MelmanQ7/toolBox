const strInput = document.getElementById('str');
const numInput = document.getElementById('num');
const buttonDoIt = document.getElementById('doIt');
const output = document.getElementById('output');
const selectElement = document.getElementById('select');
const spcSelect = document.getElementById('spcSelect');

function UI() {
    const selectValue = selectElement.value;
    switch (selectValue) {
        case "count":
            numInput.style.display = 'none';
            spcSelect.style.display = 'none';
            break;
        default:
            numInput.style.display = '';
            break;
    }
}

function processData() {
    const strValue = strInput.value;
    const numValue = Number(numInput.value);
    
    const selectValue = selectElement.value;

    if (!strValue || isNaN(numValue) || numValue <= 0) {
        showError('Введіть коректний текст і число більше нуля!', "fatal");
        return;
    } else {
        output.style.color = '';
    }
    if (selectValue === "count") {
        numInput.style.display = 'none';
    } else {
        numInput.style.display = '';
    }

    switch (selectValue) {
        case "repeatStr":
            repeatString(strValue, numValue); 
            break;
        case "count":
            countStr(strValue);
            break;
        default:
            showError('Оберіть коректну операцію.', "operation");
            break;
    }
}

function showError(str, type) {
    output.textContent = str;
    switch (type) {
        case "fatal":
            output.style.color = 'red';
            break;
        case "operation":
            output.style.color = 'yellow';
            break;
    }
}

function repeatString(str, num) {
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

function countStr(str) {
    let res = str.length;
    let spc = str.split(" ").length -1;
    output.innerHTML = `Всього символів: <b>${res}</b><br>Пробілів: <b>${spc}</b>`;
}

buttonDoIt.addEventListener('click', processData);

selectElement.addEventListener('change', UI);
