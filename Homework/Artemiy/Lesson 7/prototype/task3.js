let animal = {
	eat() {
		this.full = true;
	},
};

let rabbit = {
	__proto__: animal,
};

rabbit.eat(); // Свойство получим объект rabbit, так как this = объект, у которого вызывается метод
