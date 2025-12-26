import { numInput, selectElement, spcSelect, output, strInput, start, end } from './variables.js';

export function showError(str, type) {
    output.textContent = str;
    switch (type) {
        case "fatal":
            output.style.color = 'red';
            break;
        case "operation":
            output.style.color = 'yellow';
            break;
        default:
            output.style.color = '';
            break;
    }
}

export function UI() {
    const selectValue = selectElement.value;

    switch (selectValue) {
        case "repeatStr":
            numInput.style.display = '';
            strInput.style.display = '';
            spcSelect.style.display = 'none';
            start.style.display = 'none';
            end.style.display = 'none';
        case "countStr":
            strInput.style.display = '';
            // numInput.style.display = 'none';
            spcSelect.style.display = 'none';
            start.style.display = 'none';
            end.style.display = 'none';
            break;
        case "count":
            numInput.style.display = 'none';
            strInput.style.display = 'none';
            spcSelect.style.display = '';
            start.style.display = '';
            end.style.display = '';
            break;
        default:
            numInput.style.display = '';
            spcSelect.style.display = '';
            strInput.style.display = '';
            end.style.display = '';
            start.style.display = '';
            break;
    }
}