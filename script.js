import { UI, showError, view, clearOutput, openModal, closeModal } from './uiux.js';
import { strInput, numInput, selectElement, output, buttonDoIt, start, 
    end, staps, startA, startB, ite, cc, numOfLength, cmdStr, loadProjectInfo} from './variables.js';
import { repeatString, countStr, count, genPasword, flaxFib, getRate, comandLine } from './doIt.js';

function init() {
    go();
    view();
    UI();
    openModal();
    closeModal();
}

async function processData() {
    const strValue = strInput.value;
    const numValue = Number(numInput.value);
    const startValue = Number(start.value);
    const endValue = Number(end.value);
    const ccValue = cc.value;
    let pswrdLength = numOfLength.value;
    
    const selectValue = selectElement.value;
    let spcSelectValue = spcSelect.value;
    
    if (!selectValue) {
        showError('Оберіть операцію', "operation");
        return; // Виходимо і нічого не зберігаємо
    }

    switch (selectValue) {
        case "repeatStr":
            if (!strValue && !numValue) {
                showError('Введіть коректний текст і число більше нуля!', "fatal");
                return;
            } else if (!strValue) {
                showError('Введіть текст для повторення', "operation");
                return;
            } else if (!numValue) {
                showError('Введіть кількість повтерень тексту більше нуля(> 0)', "operation");
                return;
            } else {
                const res = repeatString(strValue, numValue, spcSelectValue);
                outputData(res);
                memory({
                    op: "repeatStr",
                    input: {strValue, numValue},
                    res
                });
            }
            break;
        case "countStr":
            if (!strValue) {
                showError('Введіть тескт для підрахунку символів', "fatal");
                return;
            } else {
                let res = countStr(strValue);
                outputData(res);
                memory({
                    op: "countStr",
                    input: {strValue},
                    res
                });
            }
            break;
        case "count":
            let sum = endValue - startValue;
            if (sum >= 500000) { showError("Забагато", "fatal"); return; }
            else {
                let res = count(startValue, endValue);
                outputData(res);
                memory({
                    op: "count",
                    input: { startValue, endValue },
                    res
                });
            }
            break;
        case "genPass":
            if (pswrdLength <= 0) {
                showError('Введіть коректний текст і число більше нуля!', "fatal");
                return;
            } else {
                let res = genPasword(pswrdLength);
                outputData(res);
                memory({
                    op: "genPass",
                    input: {pswrdLength},
                    res
                });
            }
            break;
        case "fib":
            let n = Number(staps.value);
            const a = startA.value !== "" ? Number(startA.value) : 0;
            const b = startB.value !== "" ? Number(startB.value) : 1;

            if (ite.checked) { 
                n += 2;
            }

            if (staps.value <= 0) {
                showError('Введіть кількість кроків більше нуля!', "operation");
                return;
            } else {
                let res = flaxFib(n, a, b);
                outputData(res);
                memory({
                    op: "fib",
                    input: {n, a, b},
                    res
                });
            }
            break;
        case "getRate":
            if (!ccValue) {
                showError('Введіть назву валюти!', "fatal");
            } else if (ccValue.length !== 3) { // Код валюти завжди 3 літери
                showError('Літерний код валюти має бути три літери', "operation");
            } else {
                clearOutput();
                outputData("Підключення до сервера");
                // Обов'язково await, щоб дочекатися відповіді, а не отримати Promise
                let res = await getRate(ccValue.toUpperCase());
                
                // Перевіряємо, чи є результат (чи не null)
                if (res) {
                    outputData(res);
                    memory({
                        op: "getRate",
                        input: ccValue,
                        res: res
                    });
                }
            }
            break;
        case "comand":
            if (!cmdStr.value) {
                showError('Введіть команду. help для допомоги', 'operation');
            } else {
                clearOutput();
                let res = await comandLine(cmdStr.value);
                if (res) {
                    outputData(res);
                    memory({
                        op: "comand",
                        input: cmdStr.value,
                        res: res
                    })
                }
            }
            break;
    }
}

function memory(entry) {
    let newKey = new Date().toISOString();
    localStorage.setItem(newKey, JSON.stringify(entry));
}

selectElement.addEventListener('change', UI);

export function outputData(str) {
    output.style.color = '';
    output.innerHTML = str;
}

const clear = document.getElementById('clear');
clear.addEventListener('click', () => {localStorage.clear(); view()});

function go() {
    buttonDoIt.addEventListener('click', processData);

    window.addEventListener('keydown', function(eve) {
        if (eve.key === 'Enter' && eve.ctrlKey) {
            processData();
        }
    });
}

init();

// function timeout() {
//     setTimeout(() => {
//         let ok = confirm("Час зробити перерву.");

//         if (ok === true) {
//             setTimeout(() => {
//                 confirm("Перерва закінчена.");
                
//                 if (ok === true) {
//                     timeout();
//                 } else if (confirm === false) {
//                     alert("Лічильник зупинено");
//                 }
//             }, 1000);
//         }
//     }, 5000);
// }

// if (Notification.requestPermission === 'default') {
//     Notification.requestPermission();
// }

// if (Notification.requestPermission !== 'granted') {
//     console.warn('Немає дозволу на нотифікації');
// }

// // new Notification('Перерва', {
// //     body: 'Час вирішити: продовжуємо?',
// // });

// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js');
// }

// function showConfirmNotification() {
//     navigator.serviceWorker.ready.then(reg => {
//         reg.showNotification('Продовжити?', {
//             body: '5 секуд минуор. Що робимо?',
//             actions: [
//                 { action: 'yes', title: 'Так' },
//                 { action: 'no', title: 'Ні'}
//             ]
//         });
//     });
// }


// timeout();

// async function additem(data) {
//     const db = await openDB();

//     const tx = db.transaction(STORE_NAME, 'readwrite');
//     const store = tx.objectStore(STORE_NAME);

//     store.add({
//         name: data.name,
//         value: data.value,
//         createdAt: Date.now()
//     });
//     return tx.complete;
// }

// async function getAllItems() {
//     const db = await openDB();

//     return new Promise((resolve) => {
//         const tx = db.transaction(STORE_NAME, 'readonly');
//         const store = tx.objectStore(STORE_NAME);

//         const req = store.getAll();
//         req.onsucces = () => resolve(req.result);
//     });
// }

// async function getByDate() {
//     const db = await openDB();

//     return new Promise((resolve) => {
//         const tx = db.transaction(STORE_NAME, 'readonly');
//         const index = tx.objectStore(STORE_NAME).index('by_date');

//         const req = index.getAll();
//         req.onsucces = () => resolve(req.result);
//     });
// }

// async function deleteItem(id) {
//     const db = await openDB();

//     const tx = db.transaction(STORE_NAME, 'readonly');
//     tx.objectStore(STORE_NAME).delete(id);
    
//     return tx.complete;
// }

// async function updateItem(item) {
//     const db = await openDB();

//     const tx = db.transaction(STORE_NAME, 'readonly');
//     tx.objectStore(STORE_NAME).put(item);

//     return tx.complete;
// }

