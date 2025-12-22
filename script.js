import { UI } from './uiux.js';
import { strInput, numInput, selectElement, output } from './variables.js';
import { showError } from './uiux.js';
import { repeatString, countStr } from './doIt.js';

function processData() {
    const strValue = strInput.value;
    const numValue = Number(numInput.value);
    
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
        case "count":
            if (!strValue) {
                showError('Введіть тескт для підрахунку символів', "fatal")
            } else {
                countStr(strValue);
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
