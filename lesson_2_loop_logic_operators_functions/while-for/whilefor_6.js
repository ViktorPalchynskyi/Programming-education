// https://learn.javascript.ru/task/repeat-until-correct
// Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

// Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Отмена (ESC).

// Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

// let chislo
// while (chislo < 100 || chislo == undefined) {
// 	chislo = prompt('Chislo', '')
// 	if (chislo > 100 || chislo === null) break
// }

// let num

// do {
// 	num = prompt('Введите число больше 100?', 0)
// } while (num <= 100 && num)
// можно было так

while (true) {
	const number = prompt('Number', '');

	if (number > 100 || number === null) {
		break;
	}
}
