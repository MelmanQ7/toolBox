import { numInput, selectElement, spcSelect, output, strInput, start, end, numOfLength, warning } from './variables.js';

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
            warning.style.display = 'none';
            spcSelect.style.display = 'none';
            start.style.display = 'none';
            end.style.display = 'none';
            numOfLength.style.display = 'none';
            numInput.style.display = 'block';
            strInput.style.display = 'block';
            break;
        case "countStr":
            warning.style.display = 'none';
            numInput.style.display = 'none';
            numOfLength.style.display = 'none';
            spcSelect.style.display = 'none';
            start.style.display = 'none';
            end.style.display = 'none';
            strInput.style.display = 'block';
            break;
        case "count":
            warning.style.display = 'none';
            numInput.style.display = 'none';
            strInput.style.display = 'none';
            numOfLength.style.display = 'none';
            spcSelect.style.display = 'block';
            start.style.display = 'block';
            end.style.display = 'block';
            break;
        case "genPass":
            warning.style.display = 'none';
            numInput.style.display = 'none';
            spcSelect.style.display = 'none';
            strInput.style.display = 'none';
            end.style.display = 'none';
            start.style.display = 'none';
            numOfLength.style.display = 'block';
            break;
        default:
            warning.style.display = 'block';
            numInput.style.display = 'none';
            spcSelect.style.display = 'none';
            strInput.style.display = 'none';
            end.style.display = 'none';
            start.style.display = 'none';
            numOfLength.style.display = 'none';
            break;
    }
}