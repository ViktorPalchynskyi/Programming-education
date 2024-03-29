// https://learn.javascript.ru/task/iterable-keys
// Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.

// Но это не выходит:

let map = new Map();

map.set('name', 'John');

let keys = map.keys();
keys = Array.from(keys);

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push('more');
// Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?
console.log(keys);
