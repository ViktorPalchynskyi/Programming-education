// https://learn.javascript.ru/task/proto-and-this
// Объект rabbit наследует от объекта animal.

// Какой объект получит свойство full при вызове rabbit.eat(): animal или rabbit?

let animal = {
	eat() {
		this.full = true;
	},
};

let rabbit = {
	__proto__: animal,
};

rabbit.eat();

// poluchit rabbit
