//Будет ли она иметь доступ к внешним переменным из места своего создания, или из места вызова, или из обоих мест?
function makeWorker() {
	let name = 'Pete';

	return function () {
		console.log(name);
	};
}

let name = 'John';

// создаём функцию
let work = makeWorker();

// вызываем её
work(); // что будет показано?

//Ответ: Будет выведено в консоль Pete. Функция work хранит в себе вложенную анонимную функцию, которая и вызывается. Лексическое окружение этой функции, поэтому для поиска переменной name в первую очередь мы обратимся к следующему внешнему окружение(функция makeWorker, в которой храниться переменная name)
