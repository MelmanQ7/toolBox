import { UI } from './uiux.js';
import { strInput, numInput, selectElement, output, buttonDoIt, start, end, staps, startA, startB } from './variables.js';
import { showError } from './uiux.js';
import { repeatString, countStr, count, genPasword, flaxFib } from './doIt.js';

function processData() {
    const strValue = strInput.value;
    const numValue = Number(numInput.value);
    const startValue = Number(start.value);
    const endValue = Number(end.value);
    
    const selectValue = selectElement.value;

    switch (selectValue) {
        case "repeatStr":
            if (!strValue && !numValue) {
                showError('Введіть коректний текст і число більше нуля!', "fatal");
                return;
            } else if (!strValue) {
                showError('Введіть текст для повторення', "operation");
            } else if (!numValue) {
                showError('Введіть кількість повтерень тексту більше нуля(> 0)', "operation");
            } else {
                repeatString(strValue, numValue); 
                output.style.color = '';
            }
            break;
        case "countStr":
            if (!strValue) {
                showError('Введіть тескт для підрахунку символів', "fatal")
            } else {
                countStr(strValue);
                output.style.color = '';
            }
            break;
        case "count":
            let sum = endValue - startValue;
            if (sum >= 500000) { showError("Забагато", "fatal") }
            else {count(startValue, endValue);
                output.style.color = '';}
            break;
        case "genPass":
            if (numOfLength.value <= 0) {
                showError('Введіть коректний текст і число більше нуля!', "fatal");
                return;
            } else {
                genPasword();
                output.style.color = '';
            }
            break;
        case "fib":
            const n = Number(staps.value);
            const a = startA.value !== "" ? Number(startA.value) : 0;
            const b = startB.value !== "" ? Number(startB.value) : 1;

            if (!n || n <= 0) {
                showError('Введіть кількість кроків більше нуля!', "operation");
            } else {
                flaxFib(n, a, b); 
                output.style.color = '';
            }
            break;
        case "":
            showError('Оберіть коректну операцію.', "operation");
            break;
    }
}

buttonDoIt.addEventListener('click', processData);

UI();
selectElement.addEventListener('change', UI);
