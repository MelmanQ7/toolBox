function myMap(array, callback) {
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
}

const numbers = [1, 2, 3];

// Пишемо логіку трансформації прямо тут (це і є наш callback)
const doubled = myMap(numbers, function(item) {
  return item * 2; // Те, що ми повертаємо, потрапить у newValue вище
});

console.log(doubled);
