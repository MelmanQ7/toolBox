// Document variables
export const strInput = document.getElementById('str');
export const numInput = document.getElementById('num');
export const buttonDoIt = document.getElementById('doIt');
export const output = document.getElementById('output');
export const selectElement = document.getElementById('select');
export const spcSelect = document.getElementById('spcSelect');
export const start = document.getElementById('startFrom');
export const end = document.getElementById('end');
export const numOfLength = document.getElementById('numOfLength');
export const warning = document.getElementById('warning');
export const choese = document.getElementById('choese');
export const staps = document.getElementById('staps');
export const startA = document.getElementById('startA');
export const startB = document.getElementById('startB');
export const ite = document.getElementById('ite');
export const checkbox = document.getElementById('checkbox');
export const term = document.getElementById('term');
export const cmdStr = document.getElementById('cmd-str');
export const termialLine = document.querySelector('.termial-line');
export function myMap(array, callback) {
  const result = []; // Створюємо новий порожній масив

  // 2. Проходимо циклом по кожному елементу вхідного масиву
  for (let i = 0; i < array.length; i++) {
    // 3. ВИКЛИКАЄМО callback і передаємо йому: елемент, індекс, весь масив
    const newValue = callback(array[i], i, array); 
    
    // 4. Додаємо те, що повернув callback, у наш новий масив
    result.push(newValue);
  }

  // 5. Повертаємо готовий новий масив
  return result;
};
export const cc = document.getElementById('cc');
export const listContainer = document.getElementById('storage-list');
// Self-made variables
export const allSymbols = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890-=_+[];',./{}:*\"*~!@#$%^&*()№";

export const modal = document.querySelector('.myModal');
export const openBtn = document.querySelector('#openModalBtn');
export const closeBtn = document.querySelector('#closeModal');

export async function loadProjectInfo() {
    try {
        const response = await fetch('./package.json');
        const data = await response.json();
        
        return data;
    } catch (error) {
        console.error("Помилка завантаження конфігу:", error);
    }
}
