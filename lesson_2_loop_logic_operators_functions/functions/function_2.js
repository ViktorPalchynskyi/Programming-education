// https://learn.javascript.ru/task/rewrite-function-question-or
// Следующая функция возвращает true, если параметр age больше 18.

// В ином случае она задаёт вопрос confirm и возвращает его результат.

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.

// Сделайте два варианта функции checkAge:

// Используя оператор ?
// Используя оператор ||
let age = prompt('')
function checkAge(age) {
	// age >= 18 || confirm('Родители разрешили?')
	// return age
	age >= 18 ? age : confirm('Родители разрешили?')
	return age
}
alert(checkAge(Number(age)))
