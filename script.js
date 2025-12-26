import { UI } from './uiux.js';
import { strInput, numInput, selectElement, output, buttonDoIt, start, end } from './variables.js';
import { showError } from './uiux.js';
import { repeatString, countStr, count } from './doIt.js';

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
            if (endValue >= 800000 && startValue <= 0 || (startValue <= -800000 && endValue < 0) ){
                showError('Такий розрахунок не рекомендується', "operation")
            } else if (startValue >= 450000 && endValue <= 1000000) {
                count(startValue, endValue);
                output.style.color = '';
            } else {
            count(startValue, endValue);
                output.style.color = '';
        }
            break;
        case "":
            showError('Оберіть коректну операцію.', "operation");
            break;
    }
}

buttonDoIt.addEventListener('click', processData);

selectElement.addEventListener('change', UI);
