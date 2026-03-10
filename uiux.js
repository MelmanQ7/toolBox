import { numInput, selectElement, spcSelect, output, strInput, start, end, numOfLength, warning, staps, startA, startB, checkbox, listContainer, cc, cmdStr, term, termialLine, openBtn, modal, closeBtn } from './variables.js';

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
            clearOutput();
            break;
    }
}

const allInputs = [numInput, strInput, spcSelect, start, end, numOfLength, staps, startA, startB, checkbox, cc, termialLine];

export function UI() {
    const selectValue = selectElement.value;

    // Ховаємо все одним махом
    allInputs.forEach(el => {
        if (el) el.classList.add('hidden-element'); // Перевірка el на випадок, якщо якийсь id не знайдено
    });
    warning.classList.remove('hidden-element');

    const visibilityMap = {
        "repeatStr": [numInput, strInput, spcSelect],
        "countStr":  [strInput],
        "count":     [spcSelect, start, end],
        "genPass":   [numOfLength],
        "fib":       [staps, startA, startB, checkbox],
        "getRate":   [cc],
        "comand": [termialLine],
    };

    if (visibilityMap[selectValue]) {
        warning.style.display = 'none';
        visibilityMap[selectValue].forEach(el => el.classList.remove('hidden-element'));
    }
}

export function view() {
    if (localStorage.length <= 0) {
        listContainer.innerHTML = 'Історія порожня';
        return;
    } else {
        listContainer.innerHTML = '';
        const keys = Object.keys(localStorage);

        keys.sort((a, b) => b.localeCompare(a));

        keys.forEach(key => {
            let value = localStorage.getItem(key);
            let displayValue;

            try {
                const parsed = JSON.parse(value);
                displayValue = (typeof parsed === 'object' && parsed !== null) 
                    ? JSON.stringify(parsed, null, 3) 
                    : parsed;
            } catch (error) {
                displayValue = value;
            }

            const li = document.createElement('li');
            li.style.wordBreak = "break-all"; 
            li.style.overflowWrap = "break-word";
            li.style.whiteSpace = "normal";
            li.innerHTML = `<strong>${key}:</strong> ${displayValue}`;
            listContainer.appendChild(li);
        });
    }
}

export function clearOutput() {
    output.textContent = '';
    output.style.color = '';
}

export function openModal() {
    openBtn.addEventListener('click', () => {
        view();
        modal.style.display = 'block';
    });

    window.addEventListener('keydown', (eve) => {
        let second = eve.key === 'h' || eve.key === 'H' || eve.key === 'р' || eve.key === 'Р' || eve.key === 'і' || eve.key === 'І' || eve.key === 'i' || eve.key === 'I';
        if (eve.altKey && second) {
            view();
            modal.style.display = 'flex';
        }
    });
}

export function closeModal() {
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    window.addEventListener('keydown', (eve) => {
        if (eve.key === 'Escape') {
            modal.style.display = 'none';
        }
    })
}
