// https://learn.javascript.ru/task/count-properties
// Напишите функцию count(obj), которая возвращает количество свойств объекта:

let user = {
	name: 'John',
	age: 30,
};

function count(obj) {
	return Object.keys(obj).length;
}

alert(count(user)); // 2
// Постарайтесь сделать код как можно короче.

// P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».
