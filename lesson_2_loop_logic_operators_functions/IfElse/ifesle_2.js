// https://learn.javascript.ru/task/check-standard
// Используя конструкцию if..else, напишите код, который будет спрашивать: „Какое «официальное» название JavaScript?“

// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!»

let nameJS = prompt('Какое «официальное» название JavaScript?', '')
if (nameJS == 'ECMAScript') {
	alert('Верно!')
} else {
	alert('Не знаете? ECMAScript!')
}
