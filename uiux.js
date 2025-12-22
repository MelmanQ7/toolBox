const numInput = document.getElementById('num');
const selectElement = document.getElementById('select');
const spcSelect = document.getElementById('spcSelect');

export function showError(str, type) {
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

export function UI() {
    const selectValue = selectElement.value;

    switch (selectValue) {
        case "count":
            numInput.style.display = 'none';
            spcSelect.style.display = 'none';
            break;
        default:
            numInput.style.display = '';
            spcSelect.style.display = '';
            break;
    }
}