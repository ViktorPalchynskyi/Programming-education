// https://learn.javascript.ru/task/filter-range
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.

// Функция должна возвращать новый массив и не изменять исходный.

// Например:

let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); // 3,1 (совпадающие значения)

// alert( arr ); // 5,3,8,1 (без изменений)

// function filterRange(arr, a, b) {
// 	const filteredAdd = [];
// 	arr.forEach(arr => filteredAdd.push(b <= arr >= a));
// 	return filteredAdd;
// }
function filterRange(arr, a, b) {
	return arr.filter(value => value >= a && value <= b);
}
let filtered = filterRange(arr, 1, 4);
alert(filtered);
alert(arr); // slava orakulu

// function filterRange(arr, a, b) {
//   let filtered = [],
//   for(let i = arr[0], i <= arr. i++) {
//     if (i >= a || i <= b ) {
//     FileReader.push[i];}
// } return filtered
// }
