class Animal {
	constructor(name) {
		this.name = name;
	}
}

class Rabbit extends Animal {
	constructor(name) {
		super(name); //Необходимо сначала вызвать конструктор родительского класса
		this.created = Date.now();
	}
}

let rabbit = new Rabbit('Белый кролик'); // Error: this is not defined
console.log(rabbit.name);
