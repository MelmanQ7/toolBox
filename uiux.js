import { numInput, selectElement, spcSelect, output, strInput, start, end, numOfLength, warning, startA, startB, staps} from './variables.js';

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

const allInputs = [numInput, strInput, spcSelect, start, end, numOfLength, staps, startA, startB];

export function UI() {
    const selectValue = selectElement.value;

    // Ховаємо все одним махом
    allInputs.forEach(el => {
        if (el) el.style.display = 'none'; // Перевірка el на випадок, якщо якийсь id не знайдено
    });
    warning.style.display = 'block';

    const visibilityMap = {
        "repeatStr": [numInput, strInput],
        "countStr":  [strInput],
        "count":     [spcSelect, start, end],
        "genPass":   [numOfLength],
        "fib": [staps, startA, startB] // Твоя "незвичайна" реалізація
    };

    if (visibilityMap[selectValue]) {
        warning.style.display = 'none';
        visibilityMap[selectValue].forEach(el => el.style.display = 'block');
    }
}
